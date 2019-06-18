import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminGuard} from "../../shell/guards/admin.guard";
import {GuideComponent} from "./containers/guide/guide.component";
import {GuidesResourceGuard} from "./guards/guides-resource-guard.service";

const routes: Routes = [
  {
    path: "",
    component: GuideComponent,
    canActivate: [AdminGuard, GuidesResourceGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule {
}
