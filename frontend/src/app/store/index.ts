import {ActionReducerMap} from "@ngrx/store";
import {State} from "./app.state";
import {reducer} from "./app.reducer";

export const reducers: ActionReducerMap<State> = {
  app: reducer
};
