import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agro-business',
  templateUrl: './agro-business.component.html',
  styleUrls: ['./agro-business.component.scss']
})
export class AgroBusinessComponent implements OnInit {

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
      img: "assets/challenge.jpg",
      desc: "Nous comptons  transformer ce magnifique et délicieux  fruit que nous avons en abondance,  en des produits exceptionnels  que le monde entier   voudra acquérir . Nous recherchons des investisseurs qui  au-delà de leur sens des affaires,  ont aussi une grande ambition pour les femmes et les jeunes désireux  de travailler pour  faire avancer l’ Afrique."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
