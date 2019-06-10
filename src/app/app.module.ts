import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {APP_BASE_HREF} from "@angular/common";
import {ExhibitsModule} from "./features/exhibits/exhibits.module";
import {AppRoutingModule} from "./app-routing.module";
import {AuthModule} from "./features/auth/auth.module";
import {GuidesModule} from "./features/guides/guides.module";
import {AboutModule} from "./features/about/about.module";
import {ForbidenModule} from "./features/forbiden/forbiden.module";
import {HomeModule} from "./features/home/home.module";
import {NavBarModule} from "./features/nav-bar/nav-bar.module";
import {NotFoundModule} from "./features/not-found/not-found.module";
import {ProfileModule} from "./features/profile/profile.module";
import {ToursModule} from "./features/tours/tours.module";
import {VisitorsModule} from "./features/visitors/visitors.module";
import {CoreModule} from "./core/core.module";
import {ChatModule} from "./features/chat/chat.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    NavBarModule,
    NotFoundModule,
    AuthModule,
    ExhibitsModule,
    GuidesModule,
    ToursModule,
    VisitorsModule,
    ProfileModule,
    AboutModule,
    ForbidenModule,
    HomeModule,
    ChatModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
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
