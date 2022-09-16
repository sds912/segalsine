import { AppLanguageService } from './../../services/app-language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agro-business',
  templateUrl: './agro-business.component.html',
  styleUrls: ['./agro-business.component.scss']
})
export class AgroBusinessComponent implements OnInit {

  carouselImages: any [] = [
    {
      label:"image",
      url: "assets/exportb.png"
    },
    {
      label:"Image",
      url: "assets/v1.jpg"
    },
    {
      label:"Image",
      url: "assets/v2.jpeg"
    },
    {
      label:"Image",
      url: "assets/v3.jpg"
    },
    {
      label:"Image",
      url: "assets/v3.jpg"
    },
    {
      label:"Honey",
      url: "assets/honey.jpg"
    },
    {
      label:"Oil",
      url: "assets/oil.jpg"
    }
  ]


 intro = "Nous capitalisons maintenant  7 ans dans le  domaine  de l’ Agrobusiness.  A l’image de  la Terre qui ne ment pas , nous nous évertuons toujours à valoriser  nos services  de la façon la plus professionnelle, éthique  et diligente qui soit."
 introEn ="We capitalize now 7 years in the field of the Agrobusiness.  Like the Earth that does not lie, we always strive to value our services in the most professional, ethical and diligent way."
  agro: any[] = [
    {
      title: "Exportateurs    de fruits,   légumes ,   miel et huile d’arachide :",
      img: "assets/exportb.png",
      desc: "Segalsine exporte  principalement des mangues, du Piment, de l’huile d’arachide brute  et du Miel pur d’excellente qualité provenant de nos vastes fôrets ; En contact direct avec les coopératives,  nous nous évertuons à vous offrir les produits de meilleure qualité qui soit,   aux meilleurs prix, et surtout en respectant  vos  délais et procédures. Nous essayer, revient pour la plus grande partie du temps,  à nous adopter."
    },
    {
      title: "Représentant  Exclusif  de la Marque Mixoil :",
      img: "assets/mixoil.jpg",
      desc: "Segalsine est le représentant exclusif au Sénégal, au Mali et en Gambie, de la marque italienne Mixoil,  additif  alimentaire  certifié Bio , qui aide de façon notable et rapide à la rentabilité des élevages de  toutes sortes, et aussi à la production de viande  sans antibiotiques .Notre activité  ne se limite  pas qu’à la vente : nous visitons nos clients et leur apportons  conseils et suivi via nos  vétérinaires Mixoil  à travers le monde ;Grâce à Mixoil, de nombreux jeunes sont entrés plus confiance dans l’ élevage  de volailles surtout et s’y épanouissent énormément,  trouvant ainsi, une activité qui les passionne,  qui leur apporte un revenu sur et qui augmente creshendo, les éloignant ainsi du chômage et  de l’immigration."
    },
    {
      title: "Notre prochain challenge :",
      img: "assets/v2.jpeg",
      desc: "Nous comptons  transformer ce magnifique et délicieux  fruit que nous avons en abondance,  en des produits exceptionnels  que le monde entier   voudra acquérir . Nous recherchons des investisseurs qui  au-delà de leur sens des affaires,  ont aussi une grande ambition pour les femmes et les jeunes désireux  de travailler pour  faire avancer l’ Afrique."
    }
  ]

  agroEn: any[] = [
    {
      title: "Exporters of fruits, vegetables, honey and peanut oil: ",
      img: "assets/exportb.png",
      desc: "Segalsine exports mainly mangoes, chilli, raw peanut oil and pure honey of excellent quality from our vast forests. In direct contact with the cooperatives, we strive to offer you the best quality products, at the best prices, and above all respecting your deadlines and procedures. Trying us, is for the most part, to adopt us."
    },
    {
      title: "Exclusive Representative of the Mixoil Brand : ",
      img: "assets/mixoil.jpg",
      desc: "Segalsine is the exclusive representative in Senegal, Mali and Gambia, of the Italian brand Mixoil, food additive certified Bio, which helps in a notable and fast way to the profitability of the breeding of all kinds, and also to the production of meat without antibiotics. Our activity is not limited to sales: we visit our customers and give them advice and support through our Mixoil veterinarians around the world; Thanks to Mixoil, many young people have become more confident in poultry farming and are blossoming, finding an activity that they are passionate about, that brings them a safe income and that increases creshendo, thus keeping them away from unemployment and immigration. "
    },
    {
      title: "Our next challenge:",
      img: "assets/v2.jpeg",
      desc: "We intend to transform this beautiful and delicious fruit that we have in abundance, into exceptional products that the whole world will want to acquire. We are looking for investors who beyond their business sense, also have a great ambition for women and young people willing to work to advance Africa."
    }
  ]




  constructor(public lang: AppLanguageService) { }

  ngOnInit(): void {
  }

}
