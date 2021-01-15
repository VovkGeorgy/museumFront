import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {AppComponent} from "../../../../app.component";
import {NavBarComponent} from "../../../nav-bar/containers/nav-bar/nav-bar.component";
import {HomeComponent} from "../../../home/components/home/home.component";
import {NotFoundComponent} from "../../../not-found/components/not-found/not-found.component";
import {ExhibitsPresentationComponent} from "../../../exhibits/components/exhibits-presentation/exhibits-presentation.component";
import {VisitorsComponent} from "../../../visitors/containers/visitors/visitors.component";
import {AboutComponent} from "../../../about/components/about/about.component";
import {ForbiddenComponent} from "../../../forbiden/components/forbidden/forbidden.component";
import {ExhibitEditComponent} from '../../../exhibits/components/exhibit-edit/exhibit-edit.component';
import {ExhibitViewComponent} from '../../../exhibits/components/exhibit-view/exhibit-view.component';
import {BrowserModule} from '@angular/platform-browser';
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
import {LoginComponent} from "../../../auth/components/login/login.component";
import {GuidesCommonComponent} from "../../../guides/components/guides-common/guides-common.component";
import {ToursPresentationComponent} from './tours-presentation.component';
import {SignupComponent} from "../../../auth/components/signup/signup.component";
import {TourEditComponent} from "../tour-edit/tour-edit.component";
import {TourViewComponent} from "../tour-view/tour-view.component";

describe('ToursPresentationComponent', () => {
  let component: ToursPresentationComponent;
  let fixture: ComponentFixture<ToursPresentationComponent>;

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
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
