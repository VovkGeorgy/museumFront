import {Component, OnInit} from '@angular/core';
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  serverContent: any = '';
  protectedData: any = '';
  aboutUrl: string = 'http://localhost:8090/abo/about';
  protectedUrl: string = 'http://localhost:8090/abo/protected';

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  getprotectdata(){
    this.dataService.getData(this.protectedUrl).subscribe((data => {
      this.protectedData = data;
    }));
  }

  getAbout(){
    this.dataService.getData(this.aboutUrl).subscribe((data => {
      this.serverContent = data;
    }));
  }

}
