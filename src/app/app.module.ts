import { LoaderInterceptor } from './services/loader-interceptor.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsPagesComponent } from './pages/about-us-pages/about-us-pages.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OnlineStatusModule } from 'ngx-online-status';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgroBusinessComponent } from './components/agro-business/agro-business.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { TeamComponent } from './components/team/team.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    OurServiceComponent,
    NavBarComponent,
    HomePageComponent,
    AboutUsPagesComponent,
    ContactPageComponent,
    ContactComponent,
    LoaderComponent,
    ServiceCardComponent,
    AgroBusinessComponent,
    CarrouselComponent,
    TeamComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    OnlineStatusModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
