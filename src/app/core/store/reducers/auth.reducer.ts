import {createEntityAdapter, EntityAdapter} from "@ngrx/entity";
import {AuthToken} from "../../models/auth-token-model";
import {AuthActions, AuthActionTypes} from "../actions/auth.actions";

export interface State {
  loaded: boolean;
  loading: boolean;
  error: any;
  authToken: AuthToken;
}

export const adapter: EntityAdapter<AuthToken> = createEntityAdapter<AuthToken>({});

export const initialState: State = {
  loaded: false,
  loading: false,
  error: null,
  authToken: JSON.parse(localStorage.getItem("authToken"))
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.authLogin:
    case AuthActionTypes.authLogout:
      return {
        ...state,
        loading: true
      };

    case AuthActionTypes.authLoginSuccess:
      return {
        ...state,
        loading: false,
        loaded: true,
        authToken: action.payload
      };

    case AuthActionTypes.authLogoutSuccess:
      return {
        ...state,
        loading: false,
        loaded: true,
        authToken: null
      };

    case AuthActionTypes.authError:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export const authEntitySelectors = adapter.getSelectors();
