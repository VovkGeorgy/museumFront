import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {VisitorService} from "../../services/visitor.service";
import {Visitor} from "../../../../core/models/entity-models";
import {Location} from "@angular/common";
import {first} from "rxjs/operators";

@Component({
  selector: "app-visitor-update",
  templateUrl: "./visitor-update.component.html",
  styleUrls: ["./visitor-update.component.css"]
})
export class VisitorUpdateComponent implements OnInit {

  visitor: Visitor;

  constructor(private activeRoute: ActivatedRoute,
              private visitorService: VisitorService,
              private _location: Location) {
  }

  ngOnInit() {
    this.activeRoute.params.pipe().subscribe(value => {
      this.visitorService.getVisitor(value.visitorId).pipe(first()).subscribe((visitor: Visitor) => {
        this.visitor = visitor;
      });
    });
  }

  saveVisitor($event) {
    this.visitorService.updateVisitor($event.visitor.visitorId, $event.visitor).pipe(first()).subscribe(() => {
    });
  }

  backToVisitors() {
    this._location.back();
  }
}
