import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {GuideGuard} from "../../shell/guards/guide.guard";
import {VisitorUpdateComponent} from "./containers/visitor-update/visitor-update.component";
import {VisitorCreateComponent} from "./containers/visitor-create/visitor-create.component";
import {VisitorCommonComponent} from "./containers/visitor-common/visitor-common.component";

const routes: Routes = [
  {
    path: "visitors",
    component: VisitorCommonComponent,
    canActivate: [GuideGuard]
  },
  {
    path: "visitors/visitor/update/:visitorId",
    component: VisitorUpdateComponent,
    canActivate: [GuideGuard]
  },
  {
    path: "visitors/visitor/add",
    component: VisitorCreateComponent,
    canActivate: [GuideGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorsRoutingModule {
}
