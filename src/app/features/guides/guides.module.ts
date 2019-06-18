import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {GuidesRoutingModule} from "./guides-routing.module";
import {GuidesCommonComponent} from "./components/guides-common/guides-common.component";
import {SharedModule} from "../../shared/shared/shared.module";
import {AdminGuard} from "../../shell/guards/admin.guard";
import {GuideComponent} from "./containers/guide/guide.component";
import {GuideDetailComponent} from "./components/guide-detail/guide-detail.component";
import {GuidesResourceGuard} from "./guards/guides-resource-guard.service";
import {StoreModule} from "@ngrx/store";
import * as guide from "./state-management/guide.reducer";
import {EffectsModule} from "@ngrx/effects";
import {GuideEffects} from "./state-management/guide.effects";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GuidesRoutingModule,
    StoreModule.forFeature("guideFeature", guide.reducer),
    EffectsModule.forFeature([GuideEffects]),
  ],
  declarations: [
    GuidesCommonComponent,
    GuideComponent,
    GuideDetailComponent
  ],
  providers: [
    AdminGuard,
    GuidesResourceGuard
  ]
})
export class GuidesModule {
}
