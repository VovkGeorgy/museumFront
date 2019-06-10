import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromReducers from "../reducers";

export const getGuideStore = createFeatureSelector("guide");

export const getGuideEntities = createSelector(
  getGuideStore,
  fromReducers.guide.guideEntitySelectors.selectAll
);

export const getGuides = createSelector(getGuideEntities, entities => {
  return Object.values(entities);
});

export const getTopGuides = createSelector(getGuideEntities, entities => {
  return Object.values(entities).slice(1, 5);
});

export const getGuidesLoaded = createSelector(
  getGuideStore,
  (guideStore: fromReducers.guide.State) => guideStore.loaded
);

export const getGuidesLoading = createSelector(
  getGuideStore,
  (guideStore: fromReducers.guide.State) => guideStore.loading
);

export const getSelectedGuideId = createSelector(
  getGuideStore,
  (guideStore: fromReducers.guide.State) => guideStore.selectedGuideId
);

// export const getSearchGuides = createSelector(
//   getGuideStore,
//   (guideStore: fromReducers.guide.State) => guideStore.searchGuides
// );

export const getGuideById = createSelector(
  getGuideEntities,
  getSelectedGuideId,
  (entities, id) => entities.find(i => i.guideId === id)
);

export const getGuidesError = createSelector(
  getGuideStore,
  (guideStore: fromReducers.guide.State) => guideStore.error
);
