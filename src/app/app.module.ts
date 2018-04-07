import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginLogoutComponent} from './login-logout/login-logout.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ReactiveFormsModule} from '@angular/forms';
import { ToursComponent } from './tours/tours.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    LoginLogoutComponent,
    ToursComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,   // Для построения форм и привязки
    HttpClientModule,      // Для осуществления роутинга
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginLogoutComponent},
      {path: 'tours', component: ToursComponent},
      {path: '**', component: NotFoundComponent},
      // redirection: '/home....'; pathMatch: 'Full'
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    TranslateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// required for AOT (ahead of time) compilation for ngx-translate
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
