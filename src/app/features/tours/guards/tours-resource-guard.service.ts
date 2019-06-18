import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs/internal/Observable";
import {select, Store} from "@ngrx/store";
import * as toursReducer from "../state-management/tour.reducer";
import * as tourSelector from "../state-management/tour.selectors";
import {filter, first, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";
import {GetTours} from "../state-management/tour.actions";

@Injectable()
export class ToursResourceGuard implements CanActivate {
  constructor(private router: Router,
              private store: Store<toursReducer.State>) {
  }

  canActivate(): Observable<boolean> {
    return this.store.pipe(select(tourSelector.getTours)).pipe(
      tap(data => {
        if (data.length === 0) {
          this.store.dispatch(new GetTours());
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
