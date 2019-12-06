import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TripState} from "./trip.state";

const getTripFeatureState = createFeatureSelector<TripState>('trip');

export const getTrips = createSelector(
  getTripFeatureState,
  state => state.trips
);

export const getMessage = createSelector(
  getTripFeatureState,
  state => state.message
);

export const getSelectedTrip = createSelector(
  getTripFeatureState,
  state => state.selectedTrip
);
