import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {apiUrls, clientCredentials} from "../constants/api";
import {first, map} from "rxjs/operators";
import * as jwt_decode from "jwt-decode";
import {UserDetails} from "../models/auth-token-model";
import {Observable} from "rxjs/internal/Observable";
import {of} from "rxjs/internal/observable/of";


@Injectable()
export class AuthService {
  private rolesString: string;
  private loginHeaders = new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic " + btoa(clientCredentials.client + ":" + clientCredentials.secret)
  });

  constructor(private http: HttpClient) {
  }

  /**
   * Method verify client application and current user in oauth,
   * get access token, and set Headers for requests
   * @param {string} username
   * @param {string} password
   * @returns {Observable<any>}
   */
  getToken(username: string, password: string): Observable<UserDetails> {
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
          let localDataHeaders = new HttpHeaders();
          localDataHeaders = localDataHeaders.append("Content-Type", "application/json");
          localDataHeaders = localDataHeaders.append("Authorization", "Bearer " + authToken.accessToken);
          return {
            username: username,
            profileLink: this.getProfileEditorLink(),
            roles: jwt_decode(authToken.accessToken).authorities.join(", "),
            authToken: authToken,
            dataHeaders: localDataHeaders,
          };
        })
      );
  }

  saveUserDataInLocalStorage(userDetail: UserDetails) {
    this.rolesString = jwt_decode(userDetail.authToken.accessToken).authorities.join(", ");
    localStorage.setItem("authToken", JSON.stringify(userDetail.authToken));
    localStorage.setItem("dataHeaders", JSON.stringify(userDetail.dataHeaders));
    localStorage.setItem("username", userDetail.username);
    localStorage.setItem("roles", userDetail.roles);
    localStorage.setItem("profileLink", this.getProfileEditorLink());
    localStorage.setItem("isSignedIn", "true");
    return of(true);
  }

  getProfileEditorLink() {
    if (this.isAdmin()) {
      return "#";
    }
    if (this.isGuide()) {
      return "/guide-profile";
    }
    if (this.isVisitor()) {
      return "/visitor-profile";
    }
  }

  /**
   * Logout current user
   * Clean cookies, headers, and variables
   */
  logout() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("dataHeaders");
    localStorage.removeItem("username");
    localStorage.removeItem("roles");
    localStorage.removeItem("profileLink");
    localStorage.removeItem("isSignedIn");
    return of(true);
  }

  /**
   * Check role of current user is ADMIN
   * @returns {boolean}
   */
  isAdmin() {
    if (localStorage.getItem("roles")) {
      return localStorage.getItem("roles").includes("ROLE_ADMIN");
    }
    return false;
  }

  /**
   * Check role of current user is GUIDE
   * @returns {boolean}
   */
  isGuide() {
    if (localStorage.getItem("roles")) {
      return localStorage.getItem("roles").includes("ROLE_GUIDE");
    }
    return false;
  }

  /**
   * Check role of current user is VISITOR
   * @returns {boolean}
   */
  isVisitor() {
    if (localStorage.getItem("roles")) {
      return localStorage.getItem("roles").includes("ROLE_VISITOR");
    }
    return false;
  }
}
