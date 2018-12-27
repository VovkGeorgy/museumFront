import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {AppComponent} from "../../app.component";
import {NavBarComponent} from "../../nav-bar/nav-bar.component";
import {HomeComponent} from "../../home/home.component";
import {NotFoundComponent} from "../../not-found/not-found.component";
import {LoginComponent} from "../../login/login.component";
import {ToursComponent} from "../tours.component";
import {GuidesComponent} from "../../guides/guides.component";
import {VisitorComponent} from "../../visitor/visitor.component";
import {AboutComponent} from "../../about/about.component";
import {ForbiddenComponent} from "../../forbidden/forbidden.component";
import {SignupComponent} from "../../signup/signup.component";
import {ProfileComponent} from "../../profile/profile.component";
import {DataService} from "../../service/data.service";
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "../../service/auth.service";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {AdminGuard} from "../../guard/admin.guard";
import {VisitorGuard} from "../../guard/visitor.guard";
import {AnonymGuard} from "../../guard/anonym.guard";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpLoaderFactory} from "../../app.module";
import {APP_BASE_HREF} from "@angular/common";
import {ExhibitsComponent} from "../../exhibits/exhibits.component";
import {ExhibitsEditComponent} from "../../exhibits/exhibits-edit/exhibits-edit.component";
import {ExhibitsViewComponent} from "../../exhibits/exhibits-view/exhibits-view.component";
import {ToursViewComponent} from './tours-view.component';
import {ToursEditComponent} from "../tours-edit/tours-edit.component";

describe('ToursViewComponent', () => {
  let component: ToursViewComponent;
  let fixture: ComponentFixture<ToursViewComponent>;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
