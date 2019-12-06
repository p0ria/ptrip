import {Action} from "@ngrx/store";
import {Trip} from "../../../models/dtos/trip.interface";
import {Comment} from "../../../models/dtos/comment.interface";

export enum TripActionTypes {
  LoadTrips = '[Trip] Load Trips',
  LoadTripsSuccess = '[Trip] Load Trips Success',
  LoadTripsFail = '[Trip] Load Trips Fail',
  ListenToSocket = '[Trip] Listen To Socket',
  ListenToSocketSuccess = '[Trip] Listen To Socket Success',
  ListenToSocketFail = '[Trip] Listen To Socket Fail',
  SocketOnTripAdded = '[Socket] On Trip Added',
  SocketOnCommentAdded = '[Socket] On Comment Added',
  LoadTrip = '[Trip] Load Trip',
  LoadTripSuccess = '[Trip] Load Trip Success',
  LoadTripFail = '[Trip] Load Trip Fail',
  AddComment = '[Trip] Add Comment',
  AddCommentSuccessful = '[Trip] Add Comment Successful',
  AddCommentFail = '[Trip] Add Comment Fail'
}

export class LoadTrips implements Action {
  readonly type = TripActionTypes.LoadTrips;
}

export class LoadTripsSuccess implements Action {
  readonly type = TripActionTypes.LoadTripsSuccess;
  constructor(public payload: Trip[]){}
}

export class LoadTripsFail implements Action {
  readonly type = TripActionTypes.LoadTripsFail;
  constructor(public payload: string){}
}

export class ListenToSocket implements Action {
  readonly type = TripActionTypes.ListenToSocket;
}

export class ListenToSocketSuccess implements Action {
  readonly type = TripActionTypes.ListenToSocketSuccess;
}

export class ListenToSocketFail implements Action {
  readonly type = TripActionTypes.ListenToSocketFail;
  constructor(public payload: string){}
}

export class SocketOnTripAdded implements Action {
  readonly type = TripActionTypes.SocketOnTripAdded;
  constructor(public payload: Trip){}
}

export class SocketOnCommentAdded implements Action {
  readonly type = TripActionTypes.SocketOnCommentAdded;
  constructor(public payload: Comment){}
}

export class LoadTrip implements Action {
  readonly type = TripActionTypes.LoadTrip;
  constructor(public payload: number){}
}

export class LoadTripSuccess implements Action {
  readonly type = TripActionTypes.LoadTripSuccess;
  constructor(public payload: Trip){}
}

export class LoadTripFail implements Action {
  readonly type = TripActionTypes.LoadTripFail;
  constructor(public payload: string){}
}

export class AddComment implements Action {
  readonly type = TripActionTypes.AddComment;
  constructor(public payload: {tripId: number, text: string}){}
}

export class AddCommentSuccessful implements Action{
  readonly type = TripActionTypes.AddCommentSuccessful;
  constructor(public payload: Comment){}
}

export class AddCommentFail implements Action {
  readonly type = TripActionTypes.AddCommentFail;
  constructor(public payload: string){}
}

export type TripActions =
  LoadTrips |
  LoadTripsSuccess |
  LoadTripsFail |
  ListenToSocket |
  ListenToSocketSuccess |
  ListenToSocketFail |
  SocketOnTripAdded |
  LoadTrip |
  LoadTripSuccess |
  LoadTripFail |
  AddComment |
  AddCommentSuccessful |
  AddCommentFail |
  SocketOnCommentAdded;
