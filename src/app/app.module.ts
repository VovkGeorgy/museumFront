import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {ToursPresentationComponent} from "./features/tours/components/tours-presentation/tours-presentation.component";
import {DataService} from "./core/services/data.service";
import {APP_BASE_HREF} from "@angular/common";
import {VisitorsComponent} from "./features/visitors/components/visitors/visitors.component";
import {AuthService} from "./core/services/auth.service";
import {CookieService} from "ngx-cookie-service";
import {VisitorGuard} from "./shell/guards/visitor.guard";
import {AdminGuard} from "./shell/guards/admin.guard";
import {AnonymGuard} from "./shell/guards/anonym.guard";
import {TourEditComponent} from "./features/tours/components/tour-edit/tour-edit.component";
import {TourViewComponent} from "./features/tours/components/tour-view/tour-view.component";
import {TourService} from "./core/services/entity/tour.service";
import {VisitorService} from "./core/services/entity/visitor.service";
import {ExhibitsModule} from './features/exhibits/exhibits.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {AuthModule} from './features/auth/auth.module';
import {GuidesModule} from './features/guides/guides.module';
import {AboutModule} from './features/about/about.module';
import {ForbidenModule} from './features/forbiden/forbiden.module';
import {HomeModule} from './features/home/home.module';
import {NavBarModule} from './features/nav-bar/nav-bar.module';
import {NotFoundModule} from './features/not-found/not-found.module';
import {ProfileModule} from './features/profile/profile.module';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    ToursPresentationComponent,
    VisitorsComponent,
    TourEditComponent,
    TourViewComponent,
  ],
  imports: [
    NavBarModule,
    NotFoundModule,
    AuthModule,
    ExhibitsModule,
    GuidesModule,
    ProfileModule,
    AboutModule,
    ForbidenModule,
    HomeModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    AnonymGuard,
    VisitorGuard,
    AdminGuard,
    TranslateService,
    AuthService,
    CookieService,
    DataService,
    TourService,
    VisitorService,
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
