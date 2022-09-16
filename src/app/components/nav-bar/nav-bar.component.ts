import { AppLanguageService } from './../../services/app-language.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  siteLanguage = localStorage.getItem('selgalsineLang') != undefined ? localStorage.getItem('selgalsineLang') : "FR";

  languages = [
    {
      name: "EN",
      selected: false,
      code: "en"
    },
    {
      name: "FR",
      selected: true,
      code: "fr"
    }
  ];
  menuFr: any[] = [
    {
      title: "Acceuil",
      link: ""
    },
    {
      title: "Nos Services",
      link: "#service"
    },
    {
      title: "Qui Sommes-Nous",
      link: "#about"
    },
    {
      title: "Nouvelles",
      link: ""
    },
    {
      title: "Nous-Contacter",
      link: "#contact"
    }
  ]

  menuEn: any[] = [
    {
      title:  "HOME",
      link: ""
    },
    {
      title: "Our services",
      link: "#service"
    },
    {
      title: "WHo we are",
      link: "#about"
    },
    {
      title: "News",
      link: ""
    },
    {
      title: "Contact us",
      link: "#contact"
    }
  ]




  constructor(private lang: AppLanguageService, private loader: LoaderService) { }

  ngOnInit(): void {

  }

  onToggle(name: string){
    this.siteLanguage = name;
    this.lang.toggleLang(name);
    this.loader.show()

  }



}
