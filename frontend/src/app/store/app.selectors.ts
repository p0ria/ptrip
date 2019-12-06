import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "./app.state";

const getAppFeatureState = createFeatureSelector<AppState>('app');

export const getToken = createSelector(
  getAppFeatureState,
  state => state.login ? state.login.token: null
);

export const getMessage = createSelector(
  getAppFeatureState,
  state => state.message
);

export const getPassenger = createSelector(
  getAppFeatureState,
  state => state.passenger
);

export const getLoginMode = createSelector(
  getAppFeatureState,
  state => state.login ? state.login.mode: null
);

export const getLoginErrors = createSelector(
  getAppFeatureState,
  state => state.login ? state.login.errors : null
);
