import {BrowserModule} from "@angular/platform-browser";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";


import {AppComponent} from "./app.component";
import {NavBarComponent} from "./features/nav-bar/components/nav-bar/nav-bar.component";
import {HomeComponent} from "./features/home/components/home/home.component";
import {NotFoundComponent} from "./features/not-found/components/not-found/not-found.component";
import {LoginComponent} from "./features/login/components/login/login.component";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToursPresentationComponent} from "./features/tours/components/tours-presentation/tours-presentation.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AppRoutingModule} from "./app-routing.module";
import {DataService} from "./core/services/data.service";
import {APP_BASE_HREF} from "@angular/common";
import {GuidesComponent} from "./features/guides/components/guides/guides.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ExhibitsPresentationComponent} from "./features/exhibits/components/exhibits-presentation/exhibits-presentation.component";
import {VisitorsComponent} from "./features/visitors/components/visitors/visitors.component";
import {AuthService} from "./core/services/auth.service";
import {CookieService} from "ngx-cookie-service";
import {AboutComponent} from "./features/about/components/about/about.component";
import {VisitorGuard} from "./shell/guards/visitor.guard";
import {AdminGuard} from "./shell/guards/admin.guard";
import {AnonymGuard} from "./shell/guards/anonym.guard";
import {ForbiddenComponent} from "./features/forbiden/components/forbidden/forbidden.component";
import {SignupComponent} from "./features/sing-up/components/signup/signup.component";
import {TourEditComponent} from "./features/tours/components/tour-edit/tour-edit.component";
import {TourViewComponent} from "./features/tours/components/tour-view/tour-view.component";
import {ExhibitEditComponent} from "./features/exhibits/components/exhibit-edit/exhibit-edit.component";
import {ExhibitViewComponent} from "./features/exhibits/components/exhibit-view/exhibit-view.component";
import {GuideGuard} from "./shell/guards/guide.guard";
import {GuideProfileComponent} from "./features/profile/components/guide-profile/guide-profile.component";
import {VisitorProfileComponent} from "./features/profile/components/visitor-profile/visitor-profile.component";
import {NgxSpinnerModule} from "ngx-spinner";
import {ExhibitsService} from "./core/services/entity/exhibits.service";
import {TourService} from "./core/services/entity/tour.service";
import {VisitorService} from "./core/services/entity/visitor.service";
import {GuidesService} from "./core/services/entity/guides.service";
import { ExhibitComponent } from './features/exhibits/containers/exhibit/exhibit.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    ToursPresentationComponent,
    GuidesComponent,
    ExhibitsPresentationComponent,
    VisitorsComponent,
    AboutComponent,
    ForbiddenComponent,
    SignupComponent,
    TourEditComponent,
    TourViewComponent,
    ExhibitEditComponent,
    ExhibitViewComponent,
    GuideProfileComponent,
    VisitorProfileComponent,
    ExhibitComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FlexLayoutModule
  ],
  providers: [
    AnonymGuard,
    VisitorGuard,
    GuideGuard,
    AdminGuard,
    TranslateService,
    AuthService,
    CookieService,
    DataService,
    ExhibitsService,
    TourService,
    VisitorService,
    GuidesService,
    {
      provide: APP_BASE_HREF,
      useValue: "/"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// required for AOT (ahead of time) compilation for ngx-translate
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
