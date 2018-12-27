import {Component, OnInit} from "@angular/core";
import {DataService} from "../service/data.service";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-exhibits",
  templateUrl: "./exhibits.component.html",
  styleUrls: ["./exhibits.component.css"]
})
export class ExhibitsComponent implements OnInit {
  exhibits: any[any];

  getAllToursUrl = "/exhibit/exhibits";

  constructor(private dataService: DataService,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.updateReadForm();
  }

  updateReadForm() {
    this.dataService.getData(this.getAllToursUrl)
      .subscribe(exhibits => {
        this.exhibits = exhibits;
      });
  }

  isGuide() {
    return this.authService.isGuide();
  }

  isVisitor() {
    return this.authService.isVisitor();
  }

  editExhibit(exhibit) {
    this.router.navigate(["/exhibits/edit", exhibit]);
  }

  viewExhibit(exhibit) {
    this.router.navigate(["/exhibits/view", exhibit]);
  }
}
