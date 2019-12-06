import {Component, OnInit} from '@angular/core';
import {Session} from "../../../../models/enums/session.enum";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
  selectedSession: Session = Session.Autumn;

  constructor() { }

  ngOnInit() {
  }

  getSession(session) {
    return <Session>session;
  }
}
