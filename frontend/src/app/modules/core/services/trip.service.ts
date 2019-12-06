import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Trip} from "../../../models/dtos/trip.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Comment} from "../../../models/dtos/comment.interface";

@Injectable()
export class TripService {
  constructor(private http: HttpClient){}

  getAllTrips(options: {loadImages?: boolean} = {loadImages: false}): Observable<Trip[]> {
    let headers = {
        "Content-Type": "application/json",
        "No-Auth": "true"
    };
    let url = environment.tripsUrl + (options.loadImages ?
      "?loadImages=true" : "");
    return this.http.get<Trip[]>(
      url,
      {headers: headers}
    );
  }

  getTrip(id: number): Observable<Trip> {
    let headers = {
      "Content-Type": "application/json",
      "No-Auth": "true"
    };
    let url = `${environment.tripsUrl}/${id}`;
    return this.http.get<Trip>(
      url,
      {headers: headers}
    );
  }

  addComment(tripId: number, text: string): Observable<Comment> {
    let headers = {
      "Content-Type": "application/json"
    };
    let url = `${environment.tripsUrl}/${tripId}/comments`;
    let body = JSON.stringify({text: text});
    return this.http.post<Comment>(
      url,
      body,
      {headers: headers}
    );
  }
}
