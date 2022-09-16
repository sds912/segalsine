import { AppLanguageService } from './../../services/app-language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-pages',
  templateUrl: './about-us-pages.component.html',
  styleUrls: ['./about-us-pages.component.scss']
})
export class AboutUsPagesComponent implements OnInit {

  title: string = "Qui Sommes-Nous ?"
  titleEn: string = "Who we are ?"


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

  dataEn: any[] = [
    {
      title: "The 4 pillars on which our business is based :",
      color: "#00C2D1",
      items: [
        {
          img: "assets/bio.jpg",
          text: "- The market of certified organic and/or 100% natural products because the health and the gustatory pleasure of the final consumers is our major preoccupation.   "
        },
        {
          img: "assets/ethtique.jpg",
          text: "- The creation of an ethical and honest relationship with our customers and partners; this is and will always be our foundation: we do not over promise and will always deliver based on our commitments.  "
        },
        {
          img: "assets/expert.jpg",
          text: "- Our portfolio of experts in order to master each of our projects from start to finish. Because the total satisfaction of our customers is our greatest proof of success. "
        },
        {
          img: "assets/inov.jpg",
          text: "- Innovation, in processes, products, marketing, communication and sales strategies: creativity and simplicity are part of our DNA. "
        }
      ]
    },
    {
      title: "What we believe in and strive for every day:",
      color: "#F6AF65",
      items: [
        {
          img: "assets/halal.jpg",
          text: "- We strongly believe in business ethics and strive for it in all our thoughts and actions with our customers and prospects. "
        },
        {
          img: "assets/safe.jpg",
          text: "- We firmly believe that a healthy diet, allows a healthy body and mind and therefore we strive to offer only agribusiness services that honor our beliefs: our products are either certified organic (like Mixoil), or 100% natural (like the fruits and vegetables, honey and peanut oil that we export) and halal, from lands that do not use chemical fertilizers or other modified inputs. "
        },
        {
          img: "assets/agro.jpg",
          text: "- We believe that the potential in agribusiness is so huge in Africa, that we should not consider the operators as competitors, but rather as complementary partners to achieve a better Africa earlier and thus weigh more heavily on the global scale. The granary of the world must also become the mill of the world.  "
        },
        {
          img: "assets/empl.jpg",
          text: "- We strive to ensure that our activities, by their very nature and beyond their good profitability, bring value to the lives of our customers, partners and end consumers, as well as to those of our employees. For us, this is true success. "
        }
      ]
    }
  ];

  constructor(public lang: AppLanguageService) { }

  ngOnInit(): void {
  }

}
