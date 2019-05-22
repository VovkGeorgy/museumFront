import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../../../core/services/auth.service";
import {Router} from "@angular/router";
import {ExhibitsService} from "../../../../core/services/entity/exhibits.service";

@Component({
  selector: "app-exhibits",
  templateUrl: "./exhibits-presentation.component.html",
  styleUrls: ["./exhibits-presentation.component.css"]
})
export class ExhibitsPresentationComponent implements OnInit {
  exhibits: any[any];

  constructor(private router: Router,
              private authService: AuthService,
              private exhibitsService: ExhibitsService) {
  }

  ngOnInit() {
    this.updateReadForm();
  }

  updateReadForm() {
    this.exhibitsService.getAllExhibits().subscribe(exhibits => {
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
    this.router.navigate(["/exhibits/edit", {exhibitId: exhibit.exhibitId}]);
  }

  viewExhibit(exhibit) {
    this.router.navigate(["/exhibits/view", {exhibitId: exhibit.exhibitId}]);
  }
}