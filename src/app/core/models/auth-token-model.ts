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
