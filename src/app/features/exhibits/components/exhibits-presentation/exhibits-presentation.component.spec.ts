import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExhibitsPresentationComponent} from './exhibits-presentation.component';
import {BrowserModule} from "@angular/platform-browser";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpLoaderFactory} from "../../../../app.module";
import {DataService} from "../../../../core/services/data.service";
import {APP_BASE_HREF} from "@angular/common";
import {AppRoutingModule} from "../../../../app-routing.module";
import {AnonymGuard} from "../../../../shell/guards/anonym.guard";
import {VisitorGuard} from "../../../../shell/guards/visitor.guard";
import {AdminGuard} from '../../../../shell/guards/admin.guard';
import {AuthService} from "../../../../core/services/auth.service";
import {CookieService} from "ngx-cookie-service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {AppComponent} from "../../../../app.component";
import {HomeComponent} from "../../../home/components/home/home.component";
import {NavBarComponent} from "../../../nav-bar/containers/nav-bar/nav-bar.component";
import {NotFoundComponent} from "../../../not-found/components/not-found/not-found.component";
import {LoginComponent} from "../../../auth/components/login/login.component";
import {ToursPresentationComponent} from "../../../tours/components/tours-presentation/tours-presentation.component";
import {GuidesCommonComponent} from '../../../guides/components/guides-common/guides-common.component';
import {VisitorsComponent} from "../../../visitors/containers/visitors/visitors.component";
import {ForbiddenComponent} from '../../../forbiden/components/forbidden/forbidden.component';
import {SignupComponent} from '../../../auth/components/signup/signup.component';
import {AboutComponent} from '../../../about/components/about/about.component';
import {TourViewComponent} from '../../../tours/components/tour-view/tour-view.component';
import {ExhibitEditComponent} from '../exhibit-edit/exhibit-edit.component';
import {ExhibitViewComponent} from '../exhibit-view/exhibit-view.component';
import {TourEditComponent} from "../../../tours/components/tour-edit/tour-edit.component";

describe('ExhibitsPresentationComponent', () => {
  let component: ExhibitsPresentationComponent;
  let fixture: ComponentFixture<ExhibitsPresentationComponent>;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
