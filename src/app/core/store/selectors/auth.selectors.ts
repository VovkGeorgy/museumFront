import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as auth from "../reducers/auth.reducer";
import {State} from "../reducers/auth.reducer";

export const getAuthStore = createFeatureSelector("auth");

export const getAuthToken = createSelector(getAuthStore, (state: State) => state.authToken);

export const getDataHeaders = createSelector(getAuthStore, (state: State) => state.dataHeaders);

export const getRoles = createSelector(getAuthStore, (state: State) => state.userRoles);

export const getUsername = createSelector(getAuthStore, (state: State) => state.username);

export const getProfileLink = createSelector(getAuthStore, (state: State) => state.profileLink);

export const isSigned = createSelector(getAuthStore, (state: State) => state.isSignedIn);
