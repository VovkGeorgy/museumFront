import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()
export class DataService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    }),
  };

  constructor(private http: HttpClient) {
  }

  getData(dataUrl) {
    return this.http.get(dataUrl, this.httpOptions);
  }

  postData(dataUrl, data) {
    return this.http.post(dataUrl, JSON.stringify(data), this.httpOptions);
  }

  setHeaders(dataHeaders) {
    this.httpOptions.headers = dataHeaders;
  }

  getHeaders() {
    return this.httpOptions.headers;
  }

  setDefaultHeaders() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      }),
    }
  }
}
