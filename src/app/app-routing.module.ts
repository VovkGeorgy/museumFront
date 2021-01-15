import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./features/home/components/home/home.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },

  {
    path: "guides",
    loadChildren: "./features/guides/guides.module#GuidesModule"
  },
  {
    path: "tours",
    loadChildren: "./features/tours/tours.module#ToursModule"
  },
  {
    path: "**",
    redirectTo: "/404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
