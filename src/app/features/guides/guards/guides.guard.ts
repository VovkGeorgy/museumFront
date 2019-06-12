import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs/internal/Observable";
import {select, Store} from "@ngrx/store";
import * as guideReducer from "../../../core/store/reducers/guide.reducer";
import * as guideSelector from "../../../core/store/selectors/guide.selectors";
import {first, map, switchMap} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";
import {GetGuides, GuideActionTypes} from "../../../core/store/actions/guide.actions";
import {Actions, ofType} from "@ngrx/effects";

@Injectable()
export class GuidesGuard implements CanActivate {
  constructor(private router: Router,
              private store: Store<guideReducer.State>,
              private storeActions: Actions) {
  }

  canActivate(): Observable<boolean> {
    return this.store.pipe(select(guideSelector.getGuides)).pipe(first(),
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
