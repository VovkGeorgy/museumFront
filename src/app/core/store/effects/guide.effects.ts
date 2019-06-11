import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";

import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";

import * as fromRouterActions from "../actions/router.actions";
import {GuidesService} from "../../../features/guides/services/guides.service";
import {
  AddGuide,
  AddGuideSuccess, AddToursToGuide, AddToursToGuideSuccess,
  DeleteGuide,
  DeleteGuideSuccess, DeleteTourFromGuide, DeleteTourFromGuideSuccess,
  GetGuideById,
  GetGuideByIdSuccess, GetGuides,
  GetGuidesSuccess,
  GuideActionTypes,
  GuideError,
  UpdateGuideSuccess
} from "../actions/guide.actions";

@Injectable()
export class GuideEffects {
  constructor(private actions$: Actions, private guideService: GuidesService) {
  }

  @Effect()
  loadGuides$ = this.actions$.pipe(
    ofType(GuideActionTypes.guideGetGuides),
    switchMap(() =>
      this.guideService
        .getAllGuides()
        .pipe(
          map(guides => new GetGuidesSuccess(guides)),
          catchError(error => of(new GuideError(error)))
        )
    )
  );

  @Effect()
  getGuideById$ = this.actions$.pipe(
    ofType(GuideActionTypes.guideGetGuideById),
    switchMap((action: GetGuideById) =>
      this.guideService
        .getGuide(action.payload)
        .pipe(
          map(guide => new GetGuideByIdSuccess(guide)),
          catchError(error => of(new GuideError(error)))
        )
    )
  );

  @Effect()
  addGuide$ = this.actions$.pipe(
    ofType(GuideActionTypes.guideAddGuide),
    switchMap((action: AddGuide) =>
      this.guideService
        .addGuide(action.payload)
        .pipe(
          map(guide => new AddGuideSuccess(guide)),
          catchError(error => of(new GuideError(error)))
        )
    )
  );

  @Effect()
  updateGuide$ = this.actions$.pipe(
    ofType(GuideActionTypes.guideUpdateGuide),
    switchMap((action: AddGuide) =>
      this.guideService
        .updateGuide(action.payload)
        .pipe(
          map(guide => new UpdateGuideSuccess(action.payload)),
          catchError(error => of(new GuideError(error)))
        )
    )
  );

  @Effect()
  deleteGuide$ = this.actions$.pipe(
    ofType(GuideActionTypes.guideDeleteGuide),
    switchMap((action: DeleteGuide) =>
      this.guideService
        .deleteGuide(action.payload.guideId)
        .pipe(
          map(() => new DeleteGuideSuccess(action.payload)),
          catchError(error => of(new GuideError(error)))
        )
    )
  );

  @Effect()
  deleteTourFromGuide$ = this.actions$.pipe(
    ofType(GuideActionTypes.guideDeleteTourFromGuide),
    switchMap((action: DeleteTourFromGuide) =>
      this.guideService
        .removeToursFromGuide(action.payload)
        .pipe(
          map((updatedGuide) => new DeleteTourFromGuideSuccess(updatedGuide)),
          map(() => new GetGuides()),
          catchError(error => of(new GuideError(error)))
        )
    )
  );

  @Effect()
  addToursToGuide$ = this.actions$.pipe(
    ofType(GuideActionTypes.guideAddToursToGuide),
    switchMap((action: AddToursToGuide) =>
      this.guideService
        .addToursToGuide(action.payload)
        .pipe(
          map((updatedGuide) => new AddToursToGuideSuccess(updatedGuide)),
          map(() => new GetGuides()),
          catchError(error => of(new GuideError(error)))
        )
    )
  );

  // @Effect()
  // searchGuides$ = this.actions$.pipe(
  //   ofType(GuideActionTypes.GuideSearchGuides),
  //   switchMap((action: SearchGuides) =>
  //     this.guideService
  //       .searchGuides(action.payload)
  //       .pipe(
  //         map(guides => new SearchGuidesSuccess(guides)),
  //         catchError(error => of(new GuideError(error)))
  //       )
  //   )
  // );

  @Effect()
  updateGuideSuccess$ = this.actions$.pipe(
    ofType(GuideActionTypes.guideUpdateGuideSuccess),
    map(guide => new fromRouterActions.Go({path: ["/guides"]}))
  );
}
