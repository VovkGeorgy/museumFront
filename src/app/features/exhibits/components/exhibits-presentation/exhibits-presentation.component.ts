import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {AuthService} from "../../../../core/services/auth.service";
import {Exhibit} from '../../../../core/models/entity-models';

@Component({
  selector: "app-exhibits",
  templateUrl: "./exhibits-presentation.component.html",
  styleUrls: ["./exhibits-presentation.component.css"]
})
export class ExhibitsPresentationComponent implements OnInit {

  @Input()
  exhibits: Exhibit[];

  @Output()
  clickView = new EventEmitter<any>();

  @Output()
  clickEdit = new EventEmitter<any>();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  isGuide() {
    return this.authService.isGuide();
  }

  isVisitor() {
    return this.authService.isVisitor();
  }

  editExhibit(exhibit) {
    this.clickEdit.emit({exhibit: exhibit});
  }

  viewExhibit(exhibit) {
    this.clickView.emit(({exhibit: exhibit}));
  }
}
