import {Component, Input, OnInit} from '@angular/core';
import {Session} from "../../../../models/enums/session.enum";
import * as fromTrip from "../../store/trip.state";
import {select, Store} from "@ngrx/store";
import * as tripSelectors from "../../store/trip.selectors";
import {Trip} from "../../../../models/dtos/trip.interface";

@Component({
  selector: 'app-trips-session',
  templateUrl: './trips-session.component.html',
  styleUrls: ['./trips-session.component.scss']
})
export class TripsSessionComponent implements OnInit {

  @Input() session: Session = Session.Spring;
  trips: Trip[];

  constructor(private store: Store<fromTrip.State>) { }

  ngOnInit() {
    this.store.pipe(select(tripSelectors.getTrips))
      .subscribe(trips => {
        this.trips = trips.filter(t => t.session == this.session);
      });
  }
}
