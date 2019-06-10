import {Component, OnInit} from "@angular/core";
import {Guide} from "../../../../core/models/entity-models";
import {GuidesService} from "../../services/guides.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs/internal/Observable";
import {select, Store} from "@ngrx/store";
import * as fromReducer from "../../../../core/store/reducers";
import * as fromSelectors from "../../../../core/store/selectors";
import {AddGuide, DeleteGuide, DeleteTourFromGuide, GetGuides, UpdateGuide} from "../../../../core/store/actions/guide.actions";


@Component({
  selector: "app-guide",
  templateUrl: "./guide.component.html",
  styleUrls: ["./guide.component.css"]
})
export class GuideComponent implements OnInit {

  updatingGuide: Guide;
  isUpdateMode: boolean;
  guides: Guide[];
  detailForm = false;
  guides$: Observable<Guide[]>;

  constructor(private guideService: GuidesService,
              private router: Router,
              private store: Store<fromReducer.guide.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new GetGuides());
    this.guides$ = this.store.pipe(select(fromSelectors.getGuides));
  }

  openCreateForm() {
    this.detailForm = true;
    this.isUpdateMode = false;
    this.updatingGuide = null;
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

  deleteTourFromGuide($event: any) {
    this.store.dispatch(new DeleteTourFromGuide({tour: $event.tour, guide: this.updatingGuide}));
  }

  viewTour($event) {
    this.router.navigate(["/tours/view", {tourId: $event.tourId}]);
  }
}
