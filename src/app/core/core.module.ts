import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DataService} from "./services/data.service";
import {AuthService} from "./services/auth.service";
import {CookieService} from "ngx-cookie-service";
import {ValidatorsService} from "./services/validators.service";
import {StoreModule} from "@ngrx/store";
import * as fromStore from "./store";
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(fromStore.reducers),
    EffectsModule.forRoot(fromStore.effects),
  ],
  declarations: [],
  providers: [
    CookieService,
    DataService,
    AuthService,
    ValidatorsService
  ]
})
export class CoreModule {
}
