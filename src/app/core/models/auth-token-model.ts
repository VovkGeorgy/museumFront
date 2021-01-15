import {HttpHeaders} from "@angular/common/http";

export interface AuthToken {
  jti: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
}

export interface UserAuthData {
  username: string;
  password: string;
}

export interface UserDetails {
  username: string;
  profileLink: string;
  roles: string;
  authToken: AuthToken;
  dataHeaders?: HttpHeaders;
}
