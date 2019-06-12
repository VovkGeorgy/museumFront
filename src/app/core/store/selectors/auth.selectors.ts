import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as auth from "../reducers/auth.reducer";

export const getAuthStore = createFeatureSelector("auth");

export const getAuthToken = createSelector(getAuthStore, entities => {
  return Object.values(entities).pop();
});
