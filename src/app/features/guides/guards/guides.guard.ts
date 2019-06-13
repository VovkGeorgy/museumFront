import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs/internal/Observable";
import {select, Store} from "@ngrx/store";
import * as guideReducer from "../state-management//guide.reducer";
import * as guideSelector from "../state-management/guide.selectors";
import {filter, first, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";
import {GetGuides} from "../state-management/guide.actions";

@Injectable()
export class GuidesGuard implements CanActivate {
  constructor(private router: Router,
              private store: Store<guideReducer.State>) {
  }

  canActivate(): Observable<boolean> {
    return this.store.pipe(select(guideSelector.getGuides)).pipe(
      tap(data => {
        if (data.length === 0) {
          this.store.dispatch(new GetGuides());
        }
      }),
      filter((data) => {
        return data.length > 0;
      }),
      first(),
      switchMap(() => {
        return of(true);
      }),
    );
  }
}
