import {Component, OnInit} from '@angular/core';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  tours: any[any];

  getAllToursUrl = 'http://localhost:8090/tour/tours';

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.updateReadForm();
  }

  updateReadForm() {
    this.dataService.getData(this.getAllToursUrl)
      .subscribe(tours => {
        this.tours = tours;
      });
  }

}
