import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";

import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {
  AuthActionTypes,
  AuthError,
  AuthLogin,
  AuthLoginSuccess,
  AuthLogoutSuccess, AuthSetLocalStorage,
} from "../actions/auth.actions";
import {UserDetails} from "../../models/auth-token-model";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {
  }

  @Effect()
  authLogin$ = this.actions$.pipe(
    ofType(AuthActionTypes.authLogin),
    switchMap((action: AuthLogin) =>
      this.authService
        .getToken(action.payload.username, action.payload.password)
        .pipe(
          map((userDetails: UserDetails) => new AuthLoginSuccess(userDetails)),
          catchError(error => of(new AuthError(error)))
        )
    )
  );

  @Effect()
  authSetLocalStorage$ = this.actions$.pipe(
    ofType(AuthActionTypes.authLoginSuccess),
    switchMap((action: AuthSetLocalStorage) =>
      this.authService
        .saveUserDataInLocalStorage(action.payload)
        .pipe(
          catchError(error => of(new AuthError(error)))
        )
    )
  );

  @Effect()
  authLogout$ = this.actions$.pipe(
    ofType(AuthActionTypes.authLogout),
    switchMap(() =>
      this.authService
        .logout()
        .pipe(
          map(() => new AuthLogoutSuccess()),
          catchError(error => of(new AuthError(error)))
        )
    )
  );
}
