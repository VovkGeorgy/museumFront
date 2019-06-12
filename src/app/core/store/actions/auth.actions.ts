import {Action} from "@ngrx/store";
import {AuthToken, UserAuthData} from "../../models/auth-token-model";

export enum AuthActionTypes {
  authLogin = "[Auth] login",
  authLoginSuccess = "[Auth] login success",
  authLogout = "{Auth] logout ",
  authLogoutSuccess = "{Auth] logout success",
  authError = "[Auth] error"
}

export class AuthLogin implements Action {
  readonly type = AuthActionTypes.authLogin;

  constructor(public payload: UserAuthData) {
  }
}

export class AuthLoginSuccess implements Action {
  readonly type = AuthActionTypes.authLoginSuccess;

  constructor(public payload: AuthToken) {
  }
}

export class AuthLogout implements Action {
  readonly type = AuthActionTypes.authLogout;
}

export class AuthLogoutSuccess implements Action {
  readonly type = AuthActionTypes.authLogoutSuccess;
}

export class AuthError implements Action {
  readonly type = AuthActionTypes.authError;

  constructor(public payload: any) {
  }
}

export type AuthActions =
  | AuthLogin
  | AuthLoginSuccess
  | AuthLogout
  | AuthLogoutSuccess
  | AuthError;
