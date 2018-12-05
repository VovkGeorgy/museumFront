import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-exhibits-view',
  templateUrl: './exhibits-view.component.html',
  styleUrls: ['./exhibits-view.component.css']
})
export class ExhibitsViewComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService) {
  }

  exhibit: any;
  tours: any[any];
  toursById: any[any] = [];
  getAllExhibitToursUrl = '/exhibit/tours/';


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.exhibit = params;
      this.dataService.getData(this.getAllExhibitToursUrl + this.exhibit.exhibitId)
        .subscribe(tours => {
          console.log(tours);
          this.tours = tours;
          this.tours.forEach(elem => {
              this.toursById.push(elem.tourByTourId);
            }
          );
        });
    });
  }
}
