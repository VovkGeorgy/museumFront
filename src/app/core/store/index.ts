import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {routerReducer, RouterReducerState} from "@ngrx/router-store";
import {storeFreeze} from "ngrx-store-freeze";
import {environment} from "../../../environments/environment";
import * as fromReducers from "./reducers";
import {RouterStateUrl} from "./router";
import {RouterEffects} from "./effects/router.effects";
import {GuideEffects} from "./effects/guide.effects";

export interface State {
  guide: fromReducers.guide.State;
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  guide: fromReducers.guide.reducer,
  router: routerReducer
};

export const effects = [RouterEffects, GuideEffects];

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];
