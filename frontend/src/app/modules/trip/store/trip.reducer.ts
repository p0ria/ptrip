import {initialState, TripState} from "./trip.state";
import {TripActions, TripActionTypes} from "./trip.actions";
import {MessageType} from "../../../models/enums/message.enum";
import {Comment} from "../../../models/dtos/comment.interface";

export function reducer(state = initialState, action: TripActions): TripState {
  switch (action.type) {
    case TripActionTypes.LoadTripsSuccess:
      return {
        ...state,
        trips: action.payload,
        message: null
      };

    case TripActionTypes.LoadTripsFail:
      return {
        ...state,
        message: {
          type: MessageType.Error,
          text: action.payload
        }
      };

    case TripActionTypes.ListenToSocketSuccess:
      return {
        ...state,
        message: null
      };

    case TripActionTypes.ListenToSocketFail:
      return {
        ...state,
        message: {
          type: MessageType.Error,
          text: action.payload
        }
      };

    case TripActionTypes.SocketOnTripAdded:
      if(state.trips.some(t => t.id === action.payload.id))
        return state;
      return {
        ...state,
        trips: [...state.trips, action.payload]
      };

    case TripActionTypes.SocketOnCommentAdded:
      return {
        ...addCommentToSelectedTrip(state, action.payload),
        message: {
          type: MessageType.Success,
          text: `${action.payload.author} کامنت جدید گذاشت`
        }
      };

    case TripActionTypes.LoadTripSuccess:
      return {
        ...state,
        selectedTrip: action.payload
      };

    case TripActionTypes.LoadTripFail:
      return {
        ...state,
        selectedTrip: null,
        message: {
          type: MessageType.Error,
          text: action.payload
        }
      };

    case TripActionTypes.AddCommentSuccessful:
      return {
        ...addCommentToSelectedTrip(state, action.payload),
        message: {
          type: MessageType.Success,
          text: 'کامنت با موفقیت اضافه گردید'
        }
      };

    case TripActionTypes.AddCommentFail:
      return {
        ...state,
        message: {
          type: MessageType.Error,
          text: action.payload
        }
      };

    default:
      return state;
  }

}

function addCommentToSelectedTrip(state: TripState, comment: Comment): TripState{
  if(state.selectedTrip){
    if(state.selectedTrip.id == comment.trip.id && state.selectedTrip.comments){
      if(!state.selectedTrip.comments.some(c => c.id == comment.id)){
        return {
          ...state,
          selectedTrip: {
            ...state.selectedTrip,
            comments: [
              ...state.selectedTrip.comments,
              comment
            ]
          }
        };
      }
    }
  }
  return state;
}

