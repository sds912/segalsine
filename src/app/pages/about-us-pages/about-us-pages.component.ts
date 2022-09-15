import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-pages',
  templateUrl: './about-us-pages.component.html',
  styleUrls: ['./about-us-pages.component.scss']
})
export class AboutUsPagesComponent implements OnInit {

  data: any[] = [
    {
      title: "Les 4 piliers sur lesquels notre business  repose ",
      color: "#00C2D1",
      items: [
        {
          img: "assets/bio.jpg",
          text: "-  le  marché des produits  certifiés Bio et/ou 100% naturels car la santé et le plaisir gustatif  des consommateurs finaux est notre pré occupation majeure .   "
        },
        {
          img: "assets/ethtique.jpg",
          text: "-  la création d’ une relation éthique et franche  avec nos clients et partenaires ; ceci est et sera  toujours notre socle : nous ne faisons pas de sur promesse et  délivrerons  toujours basé sur nos engagements.  "
        },
        {
          img: "assets/expert.jpg",
          text: "- Notre portefeuille d’experts  afin de maitriser de bout en bout chacun de nos projets. Car la totale satisfaction de nos clients est notre plus grande preuve  de réussite . "
        },
        {
          img: "assets/inov.jpg",
          text: "- l’innovation, dans les processus,  les produits , les stratégies  de Marketing, de communication et de vente: la créativité et la simplicité font  partie intégrante de notre ADN . "
        }
      ]
    },
    {
      title: "Ce en  quoi nous croyons  et  nous efforçons chaque jour",
      color: "#F6AF65",
      items: [
        {
          img: "assets/halal.jpg",
          text: "- Nous croyons fermement en l’éthique dans les affaires et nous y attelons dans  toutes nos pensées et  inter actions avec nos clients et nos prospects. "
        },
        {
          img: "assets/safe.jpg",
          text: "- Nous croyons fermement qu’une alimentation saine, permet un corps et un esprit sain et nous attelons donc à n’offrir que des services en agro business qui honorent  nos certitudes : nos produits sont soit certifiés Bio  ( comme le Mixoil) , soit 100% naturels  ( comme les fruits et légumes , le miel et l’huile d’arachide que nous exportons )  et halal,  issus de terres n’utilisant pas les engrais chimiques ou autres intrants modifiés. "
        },
        {
          img: "assets/agro.jpg",
          text: "- Nous croyons  que les potentialités  dans l’agro business sont tellement énormes en Afrique, qu’ il ne faut pas considérer les opérateurs comme des concurrents, mais plutôt comme des partenaires complémentaires pour arriver à une meilleure Afrique plus tôt et peser ainsi plus lourd à l’échelle  mondiale. Le grenier du  monde doit aussi devenir le  moulin du monde "
        },
        {
          img: "assets/empl.jpg",
          text: "Nous nous evertuons à ce que   que nos activités,  de par leur nature et au-delà de leur bonne rentabilité,  apportent aussi bien de la valeur dans la vie de nos clients, partenaires  et consommateurs finaux, que dans celle  de nos employés. Pour nous, c’est cela le vrai succès. "
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
