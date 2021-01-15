import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {TourActions, TourActionTypes} from "./tour.actions";
import {Tour} from "../../../core/models/entity-models";


export interface State extends EntityState<Tour> {
  loaded: boolean;
  loading: boolean;
  error: any;
  selectedTourId: number;
}

export const adapter: EntityAdapter<Tour> = createEntityAdapter<Tour>({
  selectId: (tour: Tour) => tour.tourId,
});

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
  selectedTourId: null,
  error: null,
});

export function reducer(state = initialState, action: TourActions): State {
  switch (action.type) {
    case TourActionTypes.tourGetTours:
    // case TourActionTypes.tourAddTour:
    case TourActionTypes.tourDeleteTour:
    case TourActionTypes.tourUpdateTour:
    case TourActionTypes.tourGetTourById:
      return {
        ...state,
        loading: true
      };

    case TourActionTypes.tourGetToursSuccess:
      return adapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });

    case TourActionTypes.tourGetTourByIdSuccess:
      return {...state, selectedTourId: action.payload.tourId, loading: false};

    // case TourActionTypes.tourAddTourSuccess:
    //   return adapter.addOne(action.payload, {
    //     ...state,
    //     loading: false,
    //     loaded: true
    //   });

    case TourActionTypes.tourUpdateTourSuccess: {
      return adapter.updateOne(
        {
          id: action.payload.tourId,
          changes: action.payload
        },
        {
          ...state,
          loading: false,
          loaded: true
        }
      );
    }

    case TourActionTypes.tourDeleteTourSuccess: {
      return adapter.removeOne(action.payload.tourId, {
        ...state,
        loading: false,
        loaded: true
      });
    }

    case TourActionTypes.tourError:
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

export const tourEntitySelectors = adapter.getSelectors();
