import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {VisitorService} from "../../services/visitor.service";
import {first} from "rxjs/operators";

@Component({
  selector: "app-visitor-create",
  templateUrl: "./visitor-create.component.html",
  styleUrls: ["./visitor-create.component.css"]
})
export class VisitorCreateComponent implements OnInit {

  constructor(private visitorService: VisitorService,
              private _location: Location) {
  }

  ngOnInit() {
  }

  saveVisitor($event) {
    console.log($event.visitor);
    this.visitorService.addVisitor($event.visitor).pipe(first()).subscribe(() => {
    });
  }

  backToCommon() {
    this._location.back();
  }
}
