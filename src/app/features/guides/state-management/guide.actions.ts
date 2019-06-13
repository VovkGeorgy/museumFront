import {Action} from "@ngrx/store";
import {Guide} from "../../../core/models/entity-models";
import {ToursGuideModel} from "../model/tours-guide-model";

export enum GuideActionTypes {
  guideGetGuides = "[Guide] get Guides",
  guideGetGuidesSuccess = "[Guide] get Guides success",
  guideAddGuide = "[Guide] add Guide",
  guideAddGuideSuccess = "[Guide] add Guide success",
  guideDeleteGuide = "[Guide] delete Guide",
  guideDeleteGuideSuccess = "[Guide] delete Guide success",
  guideGetGuideById = "[Guide] get Guide by id",
  guideGetGuideByIdSuccess = "[Guide] get Guide by id success",
  guideUpdateGuide = "[Guide] update Guide",
  guideUpdateGuideSuccess = "[Guide] update Guide success",
  guideDeleteTourFromGuide = "[Guide] delete Tour from Guide",
  guideDeleteTourFromGuideSuccess = "[Guide] delete Tour from Guide success",
  guideAddToursToGuide = "[Guide] add Tour to Guide",
  guideAddToursToGuideSuccess = "[Guide] add Tour to Guide success",
  guideError = "[Guide] error"
}

export class GetGuides implements Action {
  readonly type = GuideActionTypes.guideGetGuides;
}

export class GetGuidesSuccess implements Action {
  readonly type = GuideActionTypes.guideGetGuidesSuccess;

  constructor(public payload: Guide[]) {
  }
}

export class AddGuide implements Action {
  readonly type = GuideActionTypes.guideAddGuide;

  constructor(public payload: Guide) {
  }
}

export class AddGuideSuccess implements Action {
  readonly type = GuideActionTypes.guideAddGuideSuccess;

  constructor(public payload: Guide) {
  }
}

export class GetGuideById implements Action {
  readonly type = GuideActionTypes.guideGetGuideById;

  constructor(public payload: number) {
  }
}

export class GetGuideByIdSuccess implements Action {
  readonly type = GuideActionTypes.guideGetGuideByIdSuccess;

  constructor(public payload: Guide) {
  }
}

export class UpdateGuide implements Action {
  readonly type = GuideActionTypes.guideUpdateGuide;

  constructor(public payload: Guide) {
  }
}

export class UpdateGuideSuccess implements Action {
  readonly type = GuideActionTypes.guideUpdateGuideSuccess;

  constructor(public payload: Guide) {
  }
}

export class DeleteGuide implements Action {
  readonly type = GuideActionTypes.guideDeleteGuide;

  constructor(public payload: Guide) {
  }
}

export class DeleteGuideSuccess implements Action {
  readonly type = GuideActionTypes.guideDeleteGuideSuccess;

  constructor(public payload: Guide) {
  }
}

export class DeleteTourFromGuide implements Action {
  readonly type = GuideActionTypes.guideDeleteTourFromGuide;

  constructor(public payload: ToursGuideModel) {
  }
}

export class DeleteTourFromGuideSuccess implements Action {
  readonly type = GuideActionTypes.guideDeleteTourFromGuideSuccess;

  constructor(public payload: Guide) {
  }
}

export class AddToursToGuide implements Action {
  readonly type = GuideActionTypes.guideAddToursToGuide;

  constructor(public payload: ToursGuideModel) {
  }
}

export class AddToursToGuideSuccess implements Action {
  readonly type = GuideActionTypes.guideAddToursToGuideSuccess;

  constructor(public payload: Guide) {
  }
}

export class GuideError implements Action {
  readonly type = GuideActionTypes.guideError;

  constructor(public payload: any) {
  }
}

export type GuideActions =
  | GetGuides
  | GetGuidesSuccess
  | AddGuide
  | AddGuideSuccess
  | GetGuideById
  | GetGuideByIdSuccess
  | UpdateGuide
  | UpdateGuideSuccess
  | DeleteGuide
  | DeleteGuideSuccess
  | DeleteTourFromGuide
  | DeleteTourFromGuideSuccess
  | AddToursToGuide
  | AddToursToGuideSuccess
  | GuideError;
