import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpLoaderFactory} from "./app.module";
import {DataService} from "./service/data.service";
import {APP_BASE_HREF} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";
import {AnonymGuard} from "./guard/anonym.guard";
import {VisitorGuard} from "./guard/visitor.guard";
import {AuthService} from "./service/auth.service";
import {AdminGuard} from './guard/admin.guard';
import {CookieService} from 'ngx-cookie-service';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {GuidesComponent} from "./guides/guides.component";
import {VisitorComponent} from "./visitor/visitor.component";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ToursComponent} from "./tours/tours.component";
import {ExhibitsComponent} from "./exhibits/exhibits.component";
import {AboutComponent} from "./about/about.component";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {SignupComponent} from "./signup/signup.component";
import {ToursEditComponent} from "./tours/tours-edit/tours-edit.component";
import {ToursViewComponent} from "./tours/tours-view/tours-view.component";
import {ProfileComponent} from "./profile/profile.component";
import {ExhibitsEditComponent} from "./exhibits/exhibits-edit/exhibits-edit.component";
import {ExhibitsViewComponent} from './exhibits/exhibits-view/exhibits-view.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      ],
      providers: [
        AnonymGuard,
        VisitorGuard,
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
    })
      .compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
