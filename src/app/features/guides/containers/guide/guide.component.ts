import {Component, OnInit} from "@angular/core";
import {Guide, Tour} from "../../../../core/models/entity-models";
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import * as fromReducer from "../../../../core/store/reducers";
import * as fromSelectors from "../../../../core/store/selectors";
import {AddGuide, DeleteGuide, DeleteTourFromGuide, GetGuides, UpdateGuide} from "../../../../core/store/actions/guide.actions";
import {TourService} from "../../../tours/services/tour.service";
import {first} from "rxjs/operators";


@Component({
  selector: "app-guide",
  templateUrl: "./guide.component.html",
  styleUrls: ["./guide.component.css"]
})
export class GuideComponent implements OnInit {

  guides$ = this.store.pipe(select(fromSelectors.getGuides));
  updatingGuide: Guide;
  isUpdateMode: boolean;
  guides: Guide[];
  detailForm = false;
  tours: Tour[];

  constructor(private tourService: TourService,
              private router: Router,
              private store: Store<fromReducer.guide.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new GetGuides());
  }

  openCreateForm() {
    this.detailForm = true;
    this.isUpdateMode = false;
    this.updatingGuide = null;
    this.tourService.getToursWithoutGuide().pipe(first()).subscribe(value => {
      this.tours = value;
    });
  }

  openUpdateForm($event: any) {
    this.isUpdateMode = true;
    this.detailForm = true;
    this.updatingGuide = $event.guide;
  }

  deleteGuide($event: any) {
    this.store.dispatch(new DeleteGuide($event.guide));
  }

  saveGuide($event: any) {
    this.detailForm = false;
    this.store.dispatch(new AddGuide($event.guide));
  }

  updateGuide($event: any) {
    this.detailForm = false;
    this.store.dispatch(new UpdateGuide($event.guide));
  }

  closeDetail() {
    this.detailForm = false;
  }

  removeToursFromGuide($event: any) {
    const toursIdArray = $event.tour.map((tour: Tour) => {
      return tour.tourId;
    });
    this.store.dispatch(new DeleteTourFromGuide({toursId: toursIdArray, guide: this.updatingGuide}));
  }

  addToursToGuide($event: any) {
    const toursIdArray = $event.tour.map((tour: Tour) => {
      return tour.tourId;
    });
    this.store.dispatch(new DeleteTourFromGuide({toursId: toursIdArray, guide: this.updatingGuide}));
  }

  viewTour($event) {
    this.router.navigate(["/tours/view", {tourId: $event.tourId}]);
  }
}
