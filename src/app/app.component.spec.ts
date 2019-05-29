import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpLoaderFactory} from "./app.module";
import {DataService} from "./core/services/data.service";
import {APP_BASE_HREF} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {AnonymGuard} from "./shell/guards/anonym.guard";
import {VisitorGuard} from "./shell/guards/visitor.guard";
import {AuthService} from "./core/services/auth.service";
import {AdminGuard} from './shell/guards/admin.guard';
import {CookieService} from 'ngx-cookie-service';
import {NavBarComponent} from "./features/nav-bar/components/nav-bar/nav-bar.component";
import {NotFoundComponent} from "./features/not-found/components/not-found/not-found.component";
import {GuidesCommonComponent} from "./features/guides/components/guides-common/guides-common.component";
import {VisitorsComponent} from "./features/visitors/components/visitors/visitors.component";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {HomeComponent} from "./features/home/components/home/home.component";
import {LoginComponent} from "./features/auth/components/login/login.component";
import {ToursPresentationComponent} from "./features/tours/components/tours-presentation/tours-presentation.component";
import {ExhibitsPresentationComponent} from "./features/exhibits/components/exhibits-presentation/exhibits-presentation.component";
import {AboutComponent} from "./features/about/components/about/about.component";
import {ForbiddenComponent} from "./features/forbiden/components/forbidden/forbidden.component";
import {SignupComponent} from "./features/auth/components/signup/signup.component";
import {TourEditComponent} from "./features/tours/components/tour-edit/tour-edit.component";
import {TourViewComponent} from "./features/tours/components/tour-view/tour-view.component";
import {ExhibitEditComponent} from "./features/exhibits/components/exhibit-edit/exhibit-edit.component";
import {ExhibitViewComponent} from './features/exhibits/components/exhibit-view/exhibit-view.component';

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
        ToursPresentationComponent,
        GuidesCommonComponent,
        ExhibitsPresentationComponent,
        VisitorsComponent,
        AboutComponent,
        ForbiddenComponent,
        SignupComponent,
        TourEditComponent,
        TourViewComponent,
        ExhibitEditComponent,
        ExhibitViewComponent
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
