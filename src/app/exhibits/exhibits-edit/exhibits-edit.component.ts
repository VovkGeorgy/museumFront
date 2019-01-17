import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ExhibitsService} from "../../service/entity/exhibits.service";

@Component({
  selector: "app-exhibits-edit",
  templateUrl: "./exhibits-edit.component.html",
  styleUrls: ["./exhibits-edit.component.css"]
})
export class ExhibitsEditComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private exhibitService: ExhibitsService) {
  }

  exhibit: any[any];
  exhibitTours: [any];
  tempExhibit: any;
  exhibitForm: FormGroup = new FormGroup({
    exhibitId: new FormControl(""),
    title: new FormControl(""),
    dated: new FormControl(""),
    material: new FormControl(""),
    archiveNum: new FormControl(""),
    description: new FormControl(""),
    imageUrl: new FormControl(""),
    tourEntitySet: new FormControl("")
  });

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.exhibitService.getExhibit(params.exhibitId).subscribe(exhibit => {
        this.exhibit = exhibit;
        this.exhibitTours = this.exhibit.tourEntitySet;
        this.exhibitForm.setValue(this.exhibit);
      });
    });
  }

  updateExhibit() {
    let localExhibit = this.exhibitForm.getRawValue();
    this.exhibitService.updateExhibit(localExhibit.exhibitId, this.exhibitForm.getRawValue())
      .subscribe(exhibit => {
        this.tempExhibit = exhibit;
        this.router.navigate(["/exhibits"]);
      });
  }

  viewTour(tour) {
    this.router.navigate(["/tours/view", {tourId: tour.tourId}]);
  }
}
