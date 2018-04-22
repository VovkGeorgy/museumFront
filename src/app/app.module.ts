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
import { ExhibitsComponent } from './exhibits/exhibits.component';
import { VisitorComponent } from './visitor/visitor.component';


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
    VisitorComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    // RouterModule.forRoot([
    //   {path: '', component: HomeComponent},
    //   {path: 'login', component: LoginComponent},
    //   {path: 'tours', component: ToursComponent},
    //   {path: '**', component: NotFoundComponent},
    //   // redirection: '/home....'; pathMatch: 'Full'
    // ]),
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
    TranslateService,
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
