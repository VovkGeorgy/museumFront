import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {AuthToken} from "../../models/auth-token-model";
import {AuthActions, AuthActionTypes} from "../actions/auth.actions";


export interface State extends EntityState<AuthToken> {
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const adapter: EntityAdapter<AuthToken> = createEntityAdapter<AuthToken>({
  selectId: (authToken: AuthToken) => authToken.jti,
});

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
  error: null,
  searchTerm: "",
});

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.authLoginSuccess:
      return adapter.addOne(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });

    case AuthActionTypes.authLogoutSuccess:
      return adapter.removeAll({
        ...state,
        loading: false,
        loaded: true
      });

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
