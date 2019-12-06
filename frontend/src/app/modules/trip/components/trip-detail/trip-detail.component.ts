import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import * as fromTrip from "../../store/trip.state";
import * as tripSelectors from "../../store/trip.selectors";
import * as tripActions from "../../store/trip.actions";
import {Subscription} from "rxjs";
import {Trip} from "../../../../models/dtos/trip.interface";
import {CarouselComponent} from "../../../shared/components/carousel/carousel.component";
import * as rootActions from "../../../../store/app.actions";
import {LoginMode} from "../../../../models/enums/login-mode.enum";

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss']
})
export class TripDetailComponent implements OnInit, OnDestroy {

  @Input() trip: Trip;
  private selectedTripSub: Subscription;

  @ViewChild(CarouselComponent, {static: false}) carousel: CarouselComponent;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromTrip.State>) {
    this.selectedTripSub = this.store.pipe(
      select(tripSelectors.getSelectedTrip))
      .subscribe(selectedTrip => this.trip = selectedTrip);
  }

  ngOnInit() {

    this.route.params.subscribe(
      p => {
        let id = +p['id'];
        this.store.dispatch(new tripActions.LoadTrip(id));
      }
    )
  }

  ngOnDestroy(): void {
    if(this.selectedTripSub) this.selectedTripSub.unsubscribe();
  }

  getImages(): string[] {
    if(!this.trip || !this.trip.images) return [];
    return this.trip.images.map(i => i.url);
  }

  addComment(text: string) {
    if(text && text.length > 0){
      this.store.dispatch(new tripActions.AddComment(
        {
          tripId: this.trip.id,
          text: text}));
    }
  }
}
