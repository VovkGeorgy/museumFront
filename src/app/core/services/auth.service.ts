import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {DataService} from "./data.service";
import {apiUrls, clientCredentials} from "../constants/api";
import {map} from "rxjs/operators";
import * as jwt_decode from "jwt-decode";
import {AuthToken} from "../models/auth-token-model";


@Injectable()
export class AuthService {
  private rolesString: string;
  private dataHeaders = new HttpHeaders();
  private loginHeaders = new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic " + btoa(clientCredentials.client + ":" + clientCredentials.secret)
  });

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private dataService: DataService,
              private router: Router) {
  }

  /**
   * Method verify client application and current user in oauth,
   * get access token, and set Headers for requests
   * @param {string} username
   * @param {string} password
   * @returns {Observable<any>}
   */
  getToken(username: string, password: string) {
    let body = new HttpParams();
    body = body.set("username", username);
    body = body.set("password", password);
    body = body.set("grant_type", "password");
    return this.http.post(apiUrls.backend + "/oauth/token", body, {headers: this.loginHeaders})
      .pipe(
        map((response: any) => {
          const authToken = {
            jti: response.jti,
            accessToken: response.access_token,
            refreshToken: response.refresh_token,
            accessTokenExpiresIn: response.expires_in
          };
          this.setHeaders(authToken);
          this.saveUserDataInLocalStorage(authToken, username);
          this.router.navigate(["/"]);
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
    this.cookieService.set("jwtAccess", authToken.accessToken, 1);
    this.cookieService.set("username", username, 1);
    this.rolesString = jwt_decode(authToken.accessToken).authorities.join(", ");
    this.cookieService.set("roles", this.rolesString, 1);
  }

  /**
   * Logout current user
   * Clean cookies, headers, and variables
   */
  logout() {
    this.cookieService.delete("jwtAccess");
    this.cookieService.delete("roles");
    this.cookieService.delete("username");
    this.dataHeaders = new HttpHeaders();
    this.dataService.setDefaultHeaders();
    this.rolesString = null;
    return this.dataService.getData(apiUrls.backend + "/oauth/revoke-token");
  }

  /**
   * Check role of current user is ADMIN
   * @returns {boolean}
   */
  isAdmin() {
    return JSON.stringify(this.cookieService.get("roles")).search("ROLE_ADMIN") !== -1;
  }

  /**
   * Check role of current user is GUIDE
   * @returns {boolean}
   */
  isGuide() {
    return JSON.stringify(this.cookieService.get("roles")).search("ROLE_GUIDE") !== -1;
  }

  /**
   * Check role of current user is VISITOR
   * @returns {boolean}
   */
  isVisitor() {
    return JSON.stringify(this.cookieService.get("roles")).search("ROLE_VISITOR") !== -1;
  }

}
