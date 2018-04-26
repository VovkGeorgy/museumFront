import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

let oauthHeaders = new HttpHeaders();
oauthHeaders = oauthHeaders.append("Authorization", "Basic " + btoa("Client:Secret"));
oauthHeaders = oauthHeaders.append("Content-Type", "application/x-www-form-urlencoded");

let dataHeaders = new HttpHeaders();
dataHeaders = dataHeaders.append('Content-Type', 'application/json');

@Injectable()
export class AuthService {

  accessToken: string;
  refreshToken: string;
  rolesObject: any;
  rolesArray: string[] = [];
  rolesString: string;

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private router: Router) {
  }


  getToken(username: string, password: string) {
    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('password', password);
    body = body.set('grant_type', "password");
    return this.http.post('/oauth/token', body, {headers: oauthHeaders}).subscribe((response: any) => {
      this.accessToken = response.access_token;
      this.refreshToken = response.refresh_token;
      console.log(this.accessToken);
      this.getRole(this.accessToken, username);
    });
  }

  getRole(accToken: string, username: string) {
    dataHeaders = dataHeaders.append('Authorization', 'Bearer ' + accToken);
    return this.http.get('/abo/whoiam', {headers: dataHeaders}).subscribe(data => {
      this.rolesObject = data;
      console.log(this.rolesObject);
      this.rolesObject.forEach(elem => {
        this.rolesArray.push(elem.authority)
      });
      this.rolesString = this.rolesArray.join(", ");
      console.log(this.rolesArray);
      console.log(this.rolesString);
      this.cookieService.set('jwtAccess', this.accessToken, 0.01);
      this.cookieService.set('roles', this.rolesString, 0.01);
      this.cookieService.set('username', username, 0.01);
      console.log(this.cookieService.get('username'));
      this.router.navigate(['/']);
    })
  }

  logout() {
    this.cookieService.delete('jwtAccess');
    this.cookieService.delete('roles');
    this.cookieService.delete('username');
  }
}
