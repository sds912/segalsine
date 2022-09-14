import { AboutUsPagesComponent } from './pages/about-us-pages/about-us-pages.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "about",
    component: AboutUsPagesComponent
  },
  {
    path: "contact",
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
