import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as tour from "./tour.reducer";

export const getTourStore = createFeatureSelector("tourFeature");

export const getTourEntities = createSelector(
  getTourStore,
  tour.tourEntitySelectors.selectAll
);

export const getTours = createSelector(getTourEntities, entities => {
  return Object.values(entities);
});

export const getTopTours = createSelector(getTourEntities, entities => {
  return Object.values(entities).slice(1, 5);
});

export const getToursLoaded = createSelector(
  getTourStore,
  (tourStore: tour.State) => tourStore.loaded
);

export const getToursLoading = createSelector(
  getTourStore,
  (tourStore: tour.State) => tourStore.loading
);

export const getSelectedTourId = createSelector(
  getTourStore,
  (tourStore: tour.State) => tourStore.selectedTourId
);

export const getToursError = createSelector(
  getTourStore,
  (tourStore: tour.State) => tourStore.error
);
