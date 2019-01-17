import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {TourService} from "../../service/entity/tour.service";

@Component({
  selector: "app-tours-edit",
  templateUrl: "./tours-edit.component.html",
  styleUrls: ["./tours-edit.component.css"]
})
export class ToursEditComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private tourService: TourService) {
  }

  tour: any;
  tempTour: any[any];
  tourForm: FormGroup = new FormGroup({
    tourId: new FormControl(""),
    theme: new FormControl(""),
    typeOfExhibits: new FormControl(""),
    duration: new FormControl(""),
    cost: new FormControl(""),
    imageUrl: new FormControl(""),
    guideEntity: new FormControl("")
  });

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tourService.getTour(params.tourId).subscribe(tour => {
        this.tour = tour;
        this.tourService.getTourGuide(params.tourId).subscribe(guide => {
          this.tour.guideEntity = guide;
          this.tourForm.setValue(this.tour);
        });
      });
    });
  }

  updateTour() {
    let localTour = this.tourForm.getRawValue();
    this.tourService.updateTour(localTour.tourId, localTour)
      .subscribe(tour => {
        this.tempTour = tour;
        this.router.navigate(["/tours"]);
      });
  }
}
