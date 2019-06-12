import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {routerReducer, RouterReducerState} from "@ngrx/router-store";
import {storeFreeze} from "ngrx-store-freeze";
import {environment} from "../../../environments/environment";
import * as guide from "./reducers/guide.reducer";
import * as auth from "./reducers/auth.reducer";
import {RouterStateUrl} from "./router";
import {RouterEffects} from "./effects/router.effects";
import {GuideEffects} from "./effects/guide.effects";
import {AuthEffects} from "./effects/auth.effects";

export interface State {
  guide: guide.State;
  auth: auth.State;
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  guide: guide.reducer,
  auth: auth.reducer,
  router: routerReducer
};

export const effects = [RouterEffects, GuideEffects, AuthEffects];

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];
