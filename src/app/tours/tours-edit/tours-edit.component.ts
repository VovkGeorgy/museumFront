import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../service/data.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: "app-tours-edit",
  templateUrl: "./tours-edit.component.html",
  styleUrls: ["./tours-edit.component.css"]
})
export class ToursEditComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService) {
  }

  tour: any;
  guide: any;
  tempTour: any;
  updateTourUrl = "/tour/tours/update/";
  getTourUrl = "/tour/tours/";
  tourForm: FormGroup = new FormGroup({
    tourId: new FormControl(""),
    theme: new FormControl(""),
    typeOfExhibits: new FormControl(""),
    duration: new FormControl(""),
    cost: new FormControl(""),
    imageUrl: new FormControl(""),
    guideEntity: new FormControl(""),
  });

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getData(this.getTourUrl + params.tourId).subscribe(tour => {
        this.tour = tour;
        this.guide = this.tour.guideEntity;
        this.tourForm.setValue(this.tour);
      });
    });
  }

  updateTour() {
    let localTour = this.tourForm.getRawValue();
    this.dataService.postData(this.updateTourUrl + localTour.tourId, localTour)
      .subscribe(tour => {
        this.tempTour = tour;
        this.router.navigate(["/tours"]);
      });
  }
}
