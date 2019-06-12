import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";

import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {AuthActionTypes, AuthError, AuthLogin, AuthLoginSuccess, AuthLogoutSuccess} from "../actions/auth.actions";

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
          map(token => new AuthLoginSuccess(token)),
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
