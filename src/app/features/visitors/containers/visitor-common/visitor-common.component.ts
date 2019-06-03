import {Component, OnInit} from "@angular/core";
import {VisitorService} from "../../services/visitor.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: "app-visitor-common",
  templateUrl: "./visitor-common.component.html",
  styleUrls: ["./visitor-common.component.css"]
})
export class VisitorCommonComponent implements OnInit {
  visitors: any;

  constructor(private visitorService: VisitorService,
              private router: Router) {
  }

  ngOnInit() {
    this.visitorService.getAllVisitors().pipe(first()).subscribe(visitors => {
      this.visitors = visitors;
    });
  }


  deleteClick(visitor: any) {
    this.visitorService.deleteVisitor(visitor.visitorId, visitor).subscribe(() => {
    });
    this.ngOnInit();
  }

  updateClick(visitor: any) {
    this.router.navigate(["/visitor/update/" + visitor.visitorId]);
  }

  openCreateForm() {
    this.router.navigate(["/visitor/add"]);
  }
}
