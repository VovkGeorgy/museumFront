import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";

import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";

import * as fromRouterActions from "../../../core/store/actions/router.actions";
import {TourService} from "../services/tour.service";
import {
  GetTourById,
  GetTourByIdSuccess,
  GetToursSuccess,
  TourActionTypes,
  TourError, UpdateTour,
  UpdateTourSuccess
} from "./tour.actions";

@Injectable()
export class TourEffects {
  constructor(private actions$: Actions, private tourService: TourService) {
  }

  @Effect()
  loadTours$ = this.actions$.pipe(
    ofType(TourActionTypes.tourGetTours),
    switchMap(() =>
      this.tourService
        .getTours()
        .pipe(
          map(tours => new GetToursSuccess(tours)),
          catchError(error => of(new TourError(error)))
        )
    )
  );

  @Effect()
  getTourById$ = this.actions$.pipe(
    ofType(TourActionTypes.tourGetTourById),
    switchMap((action: GetTourById) =>
      this.tourService
        .getTour(action.payload)
        .pipe(
          map(tour => new GetTourByIdSuccess(tour)),
          catchError(error => of(new TourError(error)))
        )
    )
  );

  // @Effect()
  // addTour$ = this.actions$.pipe(
  //   ofType(TourActionTypes.tourAddTour),
  //   switchMap((action: AddTour) =>
  //     this.tourService
  //       .addTour(action.payload)
  //       .pipe(
  //         map(tour => new AddTourSuccess(tour)),
  //         catchError(error => of(new TourError(error)))
  //       )
  //   )
  // );
  //
  @Effect()
  updateTour$ = this.actions$.pipe(
    ofType(TourActionTypes.tourUpdateTour),
    switchMap((action: UpdateTour) =>
      this.tourService
        .updateTour(action.payload.tourId, action.payload.tourId)
        .pipe(
          map(tour => new UpdateTourSuccess(action.payload)),
          catchError(error => of(new TourError(error)))
        )
    )
  );

  // @Effect()
  // deleteTour$ = this.actions$.pipe(
  //   ofType(TourActionTypes.tourDeleteTour),
  //   switchMap((action: DeleteTour) =>
  //     this.tourService
  //       .deleteTour(action.payload.tourId)
  //       .pipe(
  //         map(() => new DeleteTourSuccess(action.payload)),
  //         catchError(error => of(new TourError(error)))
  //       )
  //   )
  // );

  @Effect()
  updateTourSuccess$ = this.actions$.pipe(
    ofType(TourActionTypes.tourUpdateTourSuccess),
    map(tour => new fromRouterActions.Go({path: ["/tours"]}))
  );
}
