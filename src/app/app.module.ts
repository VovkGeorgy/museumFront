import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToursComponent} from './tours/tours.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';
import {DataService} from './service/data.service';
import {APP_BASE_HREF} from '@angular/common';
import {GuidesComponent} from './guides/guides.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ExhibitsComponent} from './exhibits/exhibits.component';
import {VisitorComponent} from './visitor/visitor.component';
import {AuthService} from './service/auth.service'
import {CookieService} from 'ngx-cookie-service';
import {AboutComponent} from './about/about.component';
import {UserGuard} from "./guard/user.guard";
import {AdminGuard} from "./guard/admin.guard";
import {AnonymGuard} from './guard/anonym.guard';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {SignupComponent} from './signup/signup.component';
import {ToursEditComponent} from './tours/tours-edit/tours-edit.component';
import {ToursViewComponent} from './tours/tours-view/tours-view.component';
import {ProfileComponent} from './profile/profile.component';
import {ExhibitsEditComponent} from './exhibits/exhibits-edit/exhibits-edit.component';
import {ExhibitsViewComponent} from './exhibits/exhibits-view/exhibits-view.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    ToursComponent,
    GuidesComponent,
    ExhibitsComponent,
    VisitorComponent,
    AboutComponent,
    ForbiddenComponent,
    SignupComponent,
    ToursEditComponent,
    ToursViewComponent,
    ProfileComponent,
    ExhibitsEditComponent,
    ExhibitsViewComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
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
    UserGuard,
    AdminGuard,
    TranslateService,
    AuthService,
    CookieService,
    DataService,
    {
      provide: APP_BASE_HREF,
      useValue: '/'
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
