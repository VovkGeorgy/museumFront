import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {DataService} from "./data.service";
import {apiUrls, clientCredentials} from "../constants/api";
import {first, map} from "rxjs/operators";
import * as jwt_decode from "jwt-decode";
import {AuthToken} from "../models/auth-token-model";
import {Observable} from "rxjs/internal/Observable";
import {of} from "rxjs/internal/observable/of";


@Injectable()
export class AuthService {
  private rolesString: string;
  private dataHeaders = new HttpHeaders();
  private loginHeaders = new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic " + btoa(clientCredentials.client + ":" + clientCredentials.secret)
  });

  constructor(private http: HttpClient,
              private dataService: DataService) {
  }

  /**
   * Method verify client application and current user in oauth,
   * get access token, and set Headers for requests
   * @param {string} username
   * @param {string} password
   * @returns {Observable<any>}
   */
  getToken(username: string, password: string): Observable<AuthToken> {
    let body = new HttpParams();
    body = body.set("username", username);
    body = body.set("password", password);
    body = body.set("grant_type", "password");
    return this.http.post(apiUrls.backend + "/oauth/token", body, {headers: this.loginHeaders})
      .pipe(
        first(),
        map((response: any) => {
          const authToken = {
            jti: response.jti,
            accessToken: response.access_token,
            refreshToken: response.refresh_token,
            accessTokenExpiresIn: response.expires_in
          };
          this.setHeaders(authToken);
          this.saveUserDataInLocalStorage(authToken, username);
          return authToken as AuthToken;
        })
      );
  }

  setHeaders(authToken: AuthToken) {
    this.dataHeaders = this.dataHeaders.append("Content-Type", "application/json");
    this.dataHeaders = this.dataHeaders.append("Authorization", "Bearer " + authToken.accessToken);
    this.dataService.setHeaders(this.dataHeaders);
  }

  saveUserDataInLocalStorage(authToken: AuthToken, username: string) {
    this.rolesString = jwt_decode(authToken.accessToken).authorities.join(", ");
    localStorage.setItem("authToken", JSON.stringify(authToken));
    localStorage.setItem("username", username);
    localStorage.setItem("roles", this.rolesString);
  }

  /**
   * Logout current user
   * Clean cookies, headers, and variables
   */
  logout() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    localStorage.removeItem("roles");
    this.dataHeaders = new HttpHeaders();
    this.dataService.setDefaultHeaders();
    this.rolesString = null;
    return of(true);
  }

  /**
   * Check role of current user is ADMIN
   * @returns {boolean}
   */
  isAdmin() {
    if (localStorage.getItem("roles")) {
      return localStorage.getItem("roles").search("ROLE_ADMIN") !== -1;
    }

  }

  /**
   * Check role of current user is GUIDE
   * @returns {boolean}
   */
  isGuide() {
    if (localStorage.getItem("roles")) {
      return localStorage.getItem("roles").search("ROLE_GUIDE") !== -1;
    }
  }

  /**
   * Check role of current user is VISITOR
   * @returns {boolean}
   */
  isVisitor() {
    if (localStorage.getItem("roles")) {
      return localStorage.getItem("roles").search("ROLE_VISITOR") !== -1;
    }
  }
}
