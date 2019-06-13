import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as guide from "./guide.reducer";

export const getGuideStore = createFeatureSelector("guideFeature");

export const getGuideEntities = createSelector(
  getGuideStore,
  guide.guideEntitySelectors.selectAll
);

export const getGuides = createSelector(getGuideEntities, entities => {
  return Object.values(entities);
});

export const getTopGuides = createSelector(getGuideEntities, entities => {
  return Object.values(entities).slice(1, 5);
});

export const getGuidesLoaded = createSelector(
  getGuideStore,
  (guideStore: guide.State) => guideStore.loaded
);

export const getGuidesLoading = createSelector(
  getGuideStore,
  (guideStore: guide.State) => guideStore.loading
);

export const getSelectedGuideId = createSelector(
  getGuideStore,
  (guideStore: guide.State) => guideStore.selectedGuideId
);

export const getGuidesError = createSelector(
  getGuideStore,
  (guideStore: guide.State) => guideStore.error
);
