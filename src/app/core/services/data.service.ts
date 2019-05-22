import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {apiUrls} from "../constants/api";


@Injectable()
export class DataService {

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "my-auth-token"
    }),
  };

  constructor(private http: HttpClient) {
  }

  /**
   * Send GET request to server
   * @param dataUrl
   * @returns {Observable<Object>}
   */
  getData(dataUrl) {
    return this.http.get(apiUrls.backend + dataUrl, this.httpOptions);
  }

  /**
   * Send POST request to server
   * @param dataUrl
   * @param data
   * @returns {Observable<Object>}
   */
  postData(dataUrl, data) {
    return this.http.post(apiUrls.backend + dataUrl, JSON.stringify(data), this.httpOptions);
  }

  setHeaders(dataHeaders) {
    this.httpOptions.headers = dataHeaders;
  }

  getHeaders() {
    return this.httpOptions.headers;
  }

  /**
   * Set default Headers when user is logout
   */
  setDefaultHeaders() {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "my-auth-token"
      }),
    };
  }
}
