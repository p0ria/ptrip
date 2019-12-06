import {MessageType} from "../models/enums/message.enum";
import {Passenger} from "../models/dtos/passenger.interface";
import {LoginMode} from "../models/enums/login-mode.enum";

export interface State {
  app: AppState;
}

export interface AppState {
  passenger: Passenger;
  login: {
    mode: LoginMode;
    token: string;
    errors: string[];
  }
  message: {
    text: string;
    type: MessageType;
  }
}

export const initialState: AppState = {
  passenger: null,
  login: null,
  message: null
};
