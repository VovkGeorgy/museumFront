import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {GuideActions, GuideActionTypes} from "./guide.actions";
import {Guide} from "../../../core/models/entity-models";


export interface State extends EntityState<Guide> {
  loaded: boolean;
  loading: boolean;
  error: any;
  selectedGuideId: number;
}

export const adapter: EntityAdapter<Guide> = createEntityAdapter<Guide>({
  selectId: (guide: Guide) => guide.guideId,
});

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
  selectedGuideId: null,
  error: null,
});

export function reducer(state = initialState, action: GuideActions): State {
  switch (action.type) {
    case GuideActionTypes.guideGetGuides:
    case GuideActionTypes.guideAddGuide:
    case GuideActionTypes.guideDeleteGuide:
    case GuideActionTypes.guideUpdateGuide:
    case GuideActionTypes.guideGetGuideById:
      return {
        ...state,
        loading: true
      };

    case GuideActionTypes.guideGetGuidesSuccess:
      return adapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });

    case GuideActionTypes.guideGetGuideByIdSuccess:
      return {...state, selectedGuideId: action.payload.guideId, loading: false};

    case GuideActionTypes.guideAddGuideSuccess:
      return adapter.addOne(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });

    case GuideActionTypes.guideUpdateGuideSuccess: {
      return adapter.updateOne(
        {
          id: action.payload.guideId,
          changes: action.payload
        },
        {
          ...state,
          loading: false,
          loaded: true
        }
      );
    }

    case GuideActionTypes.guideDeleteGuideSuccess: {
      return adapter.removeOne(action.payload.guideId, {
        ...state,
        loading: false,
        loaded: true
      });
    }

    case GuideActionTypes.guideDeleteTourFromGuideSuccess: {
      return adapter.updateOne(
        {
          id: action.payload.guideId,
          changes: action.payload
        },
        {
          ...state,
          loading: false,
          loaded: true
        }
      );
    }

    case GuideActionTypes.guideAddToursToGuideSuccess: {
      return adapter.updateOne(
        {
          id: action.payload.guideId,
          changes: action.payload
        },
        {
          ...state,
          loading: false,
          loaded: true
        }
      );
    }

    case GuideActionTypes.guideError:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export const guideEntitySelectors = adapter.getSelectors();
