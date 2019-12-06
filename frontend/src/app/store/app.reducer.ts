import {AppState, initialState} from "./app.state";
import {AppActions, AppActionTypes} from "./app.actions";
import {LoginMode} from "../models/enums/login-mode.enum";


export function reducer(state = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionTypes.LoadTokenSuccess:
      return {
        ...state,
        login: {
          token: action.payload,
          mode: LoginMode.None,
          errors: []
        },
        message: null
      };

    case AppActionTypes.ShowLogin:
      return {
        ...state,
        login: {
          ...state.login,
          mode: action.payload
        }
      };

    case AppActionTypes.LoginHttpSuccess:
      return {
        ...state,
        login: {
          token: action.payload,
          mode: LoginMode.None,
          errors: []
        }
      };

    case AppActionTypes.LoginHttpFail:
      return {
        ...state,
        login: {
          ...state.login,
          errors: action.payload
        }
      };

    default:
      return state;
  }
}
