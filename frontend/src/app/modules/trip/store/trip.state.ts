import {Trip} from "../../../models/dtos/trip.interface";
import {MessageType} from "../../../models/enums/message.enum";
import * as fromRoot from "../../../store/app.state";

export interface State extends fromRoot.State{
  trip: TripState;
}

export interface TripState {
  trips: Trip[];
  selectedTrip: Trip | null;
  message: {
    text: string;
    type: MessageType
  }
}

export const initialState: TripState = {
  trips: [],
  selectedTrip: null,
  message: null
};

