import {Component, Input, OnInit} from '@angular/core';
import {Trip} from "../../../../models/dtos/trip.interface";

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.scss']
})
export class TripItemComponent implements OnInit {

  @Input() trip: Trip;

  constructor() { }

  ngOnInit() {

  }

  getUrl() {
    return `url("${this.trip.backgroundImageUrl}")`;
  }

}
