import {Component, OnInit} from "@angular/core";
import {Guide} from "../../../../core/models/entity-models";
import {GuidesService} from "../../services/guides.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

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

  constructor(private guideService: GuidesService,
              private router: Router) {
  }

  ngOnInit() {
    this.guideService.getAllGuides().subscribe((guides: []) => {
      this.guides = guides;
    });
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
    this.guideService.deleteGuide($event.guide.guideId).pipe(first()).subscribe(data => {
      this.ngOnInit();
    });
  }

  saveGuide($event: any) {
    this.detailForm = false;
    this.guideService.addGuide($event.guide).pipe(first()).subscribe(guide => {
      this.ngOnInit();
    });
  }

  updateGuide($event: any) {
    this.detailForm = false;
    this.guideService.updateGuide($event.guide.guideId, $event.guide).pipe(first()).subscribe(guide => {
      this.ngOnInit();
    });
  }

  closeDetail() {
    this.detailForm = false;
  }

  deleteTourFromGuide($event: any) {
    console.log(this.updatingGuide.tourEntitySet);
    this.guideService.removeTourFromGuide($event.tourId, this.updatingGuide.guideId).subscribe(value => {
      this.updatingGuide.tourEntitySet = this.updatingGuide.tourEntitySet.filter(tour => tour.tourId !== $event.tourId);
    });
  }

  viewTour($event) {
    this.router.navigate(["/tours/view", {tourId: $event.tourId}]);
  }
}
