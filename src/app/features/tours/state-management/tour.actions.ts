import {Action} from "@ngrx/store";
import {Tour} from "../../../core/models/entity-models";

export enum TourActionTypes {
  tourGetTours = "[Tour] get Tours",
  tourGetToursSuccess = "[Tour] get Tours success",
  // tourAddTour = "[Tour] add Tour",
  // tourAddTourSuccess = "[Tour] add Tour success",
  tourDeleteTour = "[Tour] delete Tour",
  tourDeleteTourSuccess = "[Tour] delete Tour success",
  tourGetTourById = "[Tour] get Tour by id",
  tourGetTourByIdSuccess = "[Tour] get Tour by id success",
  tourUpdateTour = "[Tour] update Tour",
  tourUpdateTourSuccess = "[Tour] update Tour success",
  tourError = "[Tour] error"
}

export class GetTours implements Action {
  readonly type = TourActionTypes.tourGetTours;
}

export class GetToursSuccess implements Action {
  readonly type = TourActionTypes.tourGetToursSuccess;

  constructor(public payload: Tour[]) {
  }
}

// export class AddTour implements Action {
//   readonly type = TourActionTypes.tourAddTour;
//
//   constructor(public payload: Tour) {
//   }
// }
//
// export class AddTourSuccess implements Action {
//   readonly type = TourActionTypes.tourAddTourSuccess;
//
//   constructor(public payload: Tour) {
//   }
// }

export class GetTourById implements Action {
  readonly type = TourActionTypes.tourGetTourById;

  constructor(public payload: number) {
  }
}

export class GetTourByIdSuccess implements Action {
  readonly type = TourActionTypes.tourGetTourByIdSuccess;

  constructor(public payload: Tour) {
  }
}

export class UpdateTour implements Action {
  readonly type = TourActionTypes.tourUpdateTour;

  constructor(public payload: Tour) {
  }
}

export class UpdateTourSuccess implements Action {
  readonly type = TourActionTypes.tourUpdateTourSuccess;

  constructor(public payload: Tour) {
  }
}

export class DeleteTour implements Action {
  readonly type = TourActionTypes.tourDeleteTour;

  constructor(public payload: Tour) {
  }
}

export class DeleteTourSuccess implements Action {
  readonly type = TourActionTypes.tourDeleteTourSuccess;

  constructor(public payload: Tour) {
  }
}

export class TourError implements Action {
  readonly type = TourActionTypes.tourError;

  constructor(public payload: any) {
  }
}

export type TourActions =
  | GetTours
  | GetToursSuccess
  // | AddTour
  // | AddTourSuccess
  | GetTourById
  | GetTourByIdSuccess
  | UpdateTour
  | UpdateTourSuccess
  | DeleteTour
  | DeleteTourSuccess
  | TourError;
