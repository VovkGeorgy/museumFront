import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-tours-view',
  templateUrl: './tours-view.component.html',
  styleUrls: ['./tours-view.component.css']
})

export class ToursViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private dataService: DataService) {
  }

  tour: any;
  exhibitsOfCurrentTour: any[any];
  exhibitsById: any[any] = [];
  getAllTourExhibitsUrl = '/tour/exhibits/';


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tour = params;
      this.dataService.getData(this.getAllTourExhibitsUrl + this.tour.tourId)
        .subscribe(exhibits => {
          this.exhibitsOfCurrentTour = exhibits;
          this.exhibitsOfCurrentTour.forEach(elem => {
              this.exhibitsById.push(elem.exhibitByExhibitId);
            }
          );
        });
    });
  }

}
