import {Injectable} from "@angular/core";
import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";
import {Trip} from "../../../models/dtos/trip.interface";
import {Comment} from "../../../models/dtos/comment.interface";

@Injectable()
export class SocketService {
  constructor(private socket: Socket){}

  onTripAdded(): Observable<Trip> {
    return this.socket.fromEvent('onTripAdded');
  }

  onCommentAdded(): Observable<Comment> {
    return this.socket.fromEvent('onCommentAdded');
  }
}
