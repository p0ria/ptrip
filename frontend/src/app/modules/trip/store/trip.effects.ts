import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action, Store} from "@ngrx/store";
import * as tripActions from "./trip.actions";
import {catchError, map, mergeMap, tap} from "rxjs/operators";
import {TripService} from "../../core/services/trip.service";
import {SocketService} from "../../core/services/socket.service";
import * as fromTrip from "./trip.state";

@Injectable()
export class TripEffects {
  constructor(
    private actions$: Actions,
    private tripService: TripService,
    private socketService: SocketService,
    private store: Store<fromTrip.State>){}

  @Effect()
  loadTrips$: Observable<Action> = this.actions$.pipe(
    ofType(tripActions.TripActionTypes.LoadTrips),
    mergeMap(_ => this.tripService.getAllTrips({loadImages: false})),
    map(trips => new tripActions.LoadTripsSuccess(trips)),
    catchError(err => of(new tripActions.LoadTripsFail(err.message)))
  );

  @Effect()
  listenToSocket$: Observable<Action> = this.actions$.pipe(
    ofType(tripActions.TripActionTypes.ListenToSocket),
    tap(_ => this.socketService.onTripAdded().subscribe(
      trip => this.store.dispatch(new tripActions.SocketOnTripAdded(trip)))),
    tap(_ => this.socketService.onCommentAdded().subscribe(
      comment => this.store.dispatch(new tripActions.SocketOnCommentAdded(comment)))),
    map(_ => new tripActions.ListenToSocketSuccess()),
    catchError(err => of(new tripActions.ListenToSocketFail(err.message)))
  );

  @Effect()
  loadTrip$: Observable<Action> = this.actions$.pipe(
    ofType(tripActions.TripActionTypes.LoadTrip),
    mergeMap((action: tripActions.LoadTrip) => this.tripService.getTrip(action.payload)),
    map(trip => new tripActions.LoadTripSuccess(trip)),
    catchError(err => of(new tripActions.LoadTripFail(err.message)))
  );

  @Effect()
  addComment$: Observable<Action> = this.actions$.pipe(
    ofType(tripActions.TripActionTypes.AddComment),
    mergeMap((action: tripActions.AddComment) =>
      this.tripService.addComment(action.payload.tripId, action.payload.text).pipe(
        map(comment => new tripActions.AddCommentSuccessful(comment)),
        catchError(err => of(new tripActions.AddCommentFail(err.message)))
      )
    )
  );
}
