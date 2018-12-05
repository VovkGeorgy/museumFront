import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {DataService} from "./data.service";
import "rxjs/add/operator/map";


@Injectable()
export class AuthService {

  accessToken: string;
  refreshToken: string;
  rolesObject: any;
  rolesArray: string[] = [];
  rolesString: string;
  dataHeaders = new HttpHeaders();

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
    const loginHeaders = new HttpHeaders({
      "Authorization": "Basic " + btoa("Client:Secret"),
      "Content-Type": "application/x-www-form-urlencoded"
    });
    let body = new HttpParams();
    body = body.set("username", username);
    body = body.set("password", password);
    body = body.set("grant_type", "password");
    return this.http.post("/oauth/token", body, {headers: loginHeaders}).map((response: any) => {
      this.accessToken = response.access_token;
      this.refreshToken = response.refresh_token;
      this.dataHeaders = this.dataHeaders.append("Content-Type", "application/json");
      this.dataHeaders = this.dataHeaders.append("Authorization", "Bearer " + this.accessToken);
      this.dataService.setHeaders(this.dataHeaders);
      this.cookieService.set("jwtAccess", this.accessToken, 1);
    });
  }

  /**
   * Get roles of current user from the server
   * @returns {Observable<any>}
   */
  getRole() {
    return this.http.get("/abo/whoiam", {headers: this.dataService.getHeaders()}).map((data: any) => {
      data.forEach(elem => {
        this.rolesArray.push(elem.authority);
      });
      this.rolesString = this.rolesArray.join(", ");
      this.cookieService.set("roles", this.rolesString, 1);
      this.router.navigate(["/"]);
    });
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
    this.rolesArray = [];
    this.rolesObject = null;
  }

  /**
   * Check role of current user is ADMIN
   * @returns {boolean}
   */
  isAdmin() {
    if (JSON.stringify(this.cookieService.get("roles")).search("ROLE_ADMIN") !== -1) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Check role of current user is USER
   * @returns {boolean}
   */
  isUser() {
    if (JSON.stringify(this.cookieService.get("roles")).search("ROLE_USER") !== -1) {
      return true;
    } else {
      return false;
    }
  }

}
