import { AppLanguageService } from './../../services/app-language.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  siteLanguage = 'FR';

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
      title: "Contac us",
      link: "#contact"
    }
  ]




  constructor(private lang: AppLanguageService) { }

  ngOnInit(): void {
    console.log(this.lang.langChange.subscribe(r => console.log(r)))
  }

  onToggle(name: string){
    this.siteLanguage = name;
    this.lang.toggleLang(name)
  }



}
