import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DataService} from "./services/data.service";
import {AuthService} from "./services/auth.service";
import {ValidatorsService} from "./services/validators.service";
import {StoreModule} from "@ngrx/store";
import * as fromStore from "./store";
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(fromStore.reducers),
    EffectsModule.forRoot(fromStore.effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  declarations: [],
  providers: [
    DataService,
    AuthService,
    ValidatorsService
  ]
})
export class CoreModule {
}
