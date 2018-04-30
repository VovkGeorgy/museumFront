import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {DataService} from "./data.service";
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

  // authObject: any;
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


  getToken(username: string, password: string) {
    const loginHeaders = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('Client:Secret'),
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    console.log('getToken-start');
    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('password', password);
    body = body.set('grant_type', "password");
    return this.http.post('/oauth/token', body, {headers: loginHeaders}).map((response: any) => {
      // this.authObject = response;
      this.accessToken = response.access_token;
      this.refreshToken = response.refresh_token;
      this.dataHeaders = this.dataHeaders.append('Content-Type', 'application/json');
      this.dataHeaders = this.dataHeaders.append('Authorization', 'Bearer ' + this.accessToken);
      this.dataService.setHeaders(this.dataHeaders);
      this.cookieService.set('jwtAccess', this.accessToken, 1);
      // this.getRole(username);
    });
  }

  getRole() {
    console.log('getRole-start');
    return this.http.get('/abo/whoiam', {headers: this.dataService.getHeaders()}).map((data: any) => {
      // this.rolesObject = data;
      console.log(data);
      // console.log(this.rolesObject);
      data.forEach(elem => {
        console.log(elem);
        // this.rolesArray.push(data.map(function(a) {return a["authority"];}));
        console.log(this.rolesArray);
        this.rolesArray.push(elem.authority);
      });
      this.rolesString = this.rolesArray.join(", ");
      this.cookieService.set('roles', this.rolesString, 1);
      console.log(this.accessToken);
      this.router.navigate(['/']);
    })
  }

  logout() {
    this.cookieService.delete('jwtAccess');
    this.cookieService.delete('roles');
    this.cookieService.delete('username');
    this.dataHeaders = new HttpHeaders();
    // this.dataHeaders.delete('Content-Type');
    // this.dataHeaders.delete('Authorization');
    this.dataService.setDefaultHeaders();
    this.rolesString = null;
    this.rolesArray = [];
    this.rolesObject = null;
  }

  // getDataHeaders() {
  //   console.log("getDataHeaders");
  //   console.log(dataHeaders);
  //   return dataHeaders;
  // }

  isAdmin() {
    if (JSON.stringify(this.cookieService.get('roles')).search('ROLE_ADMIN') !== -1) {
      return true;
    } else {
      return false;
    }
  }

  isUser() {
    if (JSON.stringify(this.cookieService.get('roles')).search('ROLE_USER') !== -1) {
      return true;
    } else {
      return false;
    }
  }

}
