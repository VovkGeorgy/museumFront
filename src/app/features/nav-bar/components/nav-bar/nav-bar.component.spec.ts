import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {AppComponent} from "../../../../app.component";
import {NavBarComponent} from "./nav-bar.component";
import {HomeComponent} from "../../../home/components/home/home.component";
import {NotFoundComponent} from "../../../not-found/components/not-found/not-found.component";
import {ToursPresentationComponent} from "../../../tours/components/tours-presentation/tours-presentation.component";
import {ExhibitsPresentationComponent} from "../../../exhibits/components/exhibits-presentation/exhibits-presentation.component";
import {VisitorsComponent} from "../../../visitors/components/visitors/visitors.component";
import {AboutComponent} from "../../../about/components/about/about.component";
import {ForbiddenComponent} from "../../../forbiden/components/forbidden/forbidden.component";
import {SignupComponent} from "../../../sing-up/components/signup/signup.component";
import {TourViewComponent} from '../../../tours/components/tour-view/tour-view.component';
import {ProfileComponent} from '../profile/profile.component';
import {ExhibitEditComponent} from '../../../exhibits/components/exhibit-edit/exhibit-edit.component';
import {ExhibitViewComponent} from '../../../exhibits/components/exhibit-view/exhibit-view.component';
import {BrowserModule} from '@angular/platform-browser';
import {TourEditComponent} from "../../../tours/components/tour-edit/tour-edit.component";
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../../../app-routing.module';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "../../../../app.module";
import {AnonymGuard} from "../../../../shell/guards/anonym.guard";
import {VisitorGuard} from "../../../../shell/guards/visitor.guard";
import {AdminGuard} from "../../../../shell/guards/admin.guard";
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from "../../../../core/services/auth.service";
import {CookieService} from "ngx-cookie-service";
import {DataService} from "../../../../core/services/data.service";
import {APP_BASE_HREF} from "@angular/common";
import {LoginComponent} from "../../../login/components/login/login.component";
import {GuidesComponent} from "../../../guides/components/guides/guides.component";

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

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
        GuidesComponent,
        ExhibitsPresentationComponent,
        VisitorsComponent,
        AboutComponent,
        ForbiddenComponent,
        SignupComponent,
        TourEditComponent,
        TourViewComponent,
        ProfileComponent,
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

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
