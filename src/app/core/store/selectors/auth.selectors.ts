import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as auth from "../reducers/auth.reducer";

export const getAuthStore = createFeatureSelector("auth");

export const getAuthToken = createSelector(getAuthStore, authToken => {
  return authToken;
});

export const getDataHeaders = createSelector(getAuthStore, dataHeaders => {
  return dataHeaders;
});

export const getRoles = createSelector(getAuthStore, userRoles => {
  return userRoles;
});
