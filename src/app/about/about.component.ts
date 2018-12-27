import {Component, OnInit} from '@angular/core';
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  adminDataUrl = "/abo/adminOnly";
  data : any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  getAdminData(){
    this.dataService.getData(this.adminDataUrl)
      .subscribe(data => {
        this.data = data;
      });
  }
}
