import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminGuard} from "../../shell/guards/admin.guard";
import {GuideComponent} from "./containers/guide/guide.component";
import {GuidesGuard} from "./guards/guides.guard";

const routes: Routes = [
  {
    path: "",
    component: GuideComponent,
    canActivate: [AdminGuard, GuidesGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule {
}
