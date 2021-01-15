import {createEntityAdapter, EntityAdapter} from "@ngrx/entity";
import {AuthToken} from "../../models/auth-token-model";
import {AuthActions, AuthActionTypes} from "../actions/auth.actions";
import {HttpHeaders} from "@angular/common/http";

export interface State {
  loaded: boolean;
  loading: boolean;
  error: any;
  isSignedIn: boolean;
  userRoles: string;
  username: string;
  profileLink: string;
  dataHeaders: HttpHeaders;
  authToken: AuthToken;
}

export const initialState: State = {
  loaded: false,
  loading: false,
  error: null,
  isSignedIn: !!localStorage.getItem("isSignedIn$"),
  userRoles: localStorage.getItem("roles"),
  username: localStorage.getItem("username"),
  profileLink: localStorage.getItem("profileLink"),
  dataHeaders: JSON.parse(localStorage.getItem("dataHeaders")),
  authToken: JSON.parse(localStorage.getItem("authToken"))
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.authLogin:
    case AuthActionTypes.authLogout:
    case AuthActionTypes.authSetLocalStorage:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case AuthActionTypes.authLoginSuccess:
      return {
        ...state,
        loading: false,
        loaded: true,
        isSignedIn: true,
        username: action.payload.username,
        userRoles: action.payload.roles,
        profileLink: action.payload.profileLink,
        authToken: action.payload.authToken,
        dataHeaders: action.payload.dataHeaders
      };

    case AuthActionTypes.authLogoutSuccess:
      return {
        ...state,
        loading: false,
        loaded: true,
        isSignedIn: false,
        userRoles: null,
        username: null,
        profileLink: null,
        dataHeaders: null,
        authToken: null
      };

    case AuthActionTypes.authError:
      return {
        ...state,
        loading: false,
        loaded: false,
        isSignedIn: false,
        error: action.payload
      };

    default:
      return state;
  }
}
