import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs/internal/Observable";
import {select, Store} from "@ngrx/store";
import * as fromReducer from "../../../core/store/reducers";
import * as fromSelectors from "../../../core/store/selectors";
import {first, map, switchMap} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";
import {GetGuides, GuideActionTypes} from "../../../core/store/actions/guide.actions";
import {Actions, ofType} from "@ngrx/effects";

@Injectable()
export class GuidesGuard implements CanActivate {
  constructor(private router: Router,
              private store: Store<fromReducer.guide.State>,
              private storeActions: Actions) {
  }

  canActivate(): Observable<boolean> {
    return this.store.pipe(select(fromSelectors.getGuides)).pipe(first(),
      switchMap(data => {
        if (data.length > 0) {
          return of(true);
        }

        this.store.dispatch(new GetGuides());

        return this.storeActions.pipe(
          ofType(GuideActionTypes.guideGetGuidesSuccess),
          first(),
          map(() => true)
        );
      })
    );
  }
}
