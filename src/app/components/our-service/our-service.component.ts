import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent implements OnInit {

  data: any = {
    sect1: "Consultance  en stratégies de Marketing, Communication et Vente  L’équipe dirigeante dispose de près de 25 années d’expérience dans",
    sect2: "- l’élaboration de stratégies gagnantes dans les domaines du Marketing, de la communication, de la vente B2C et B2B  ainsi que de la distribution ",
    sect3: "- l’accompagnement /  la supervision de bout en bout  dans leurs implémentations effectives et réussies",
    sect4: "Nos domaines de prédilection :  Les produits alimentaires de grande consommation,  les produits et solutions télécoms,  les produits immobiliers, solutions  e gouvernements."
  }

  services: any[] = [
    {
      title: "Marketing",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      url: "https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_1280.jpg"
    },
    {
      title: "Communication",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      url: "https://cdn.pixabay.com/photo/2018/05/17/15/10/social-3408791_1280.jpg"
    },
    {
      title: "Vente",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      url: "https://cdn.pixabay.com/photo/2016/09/30/19/10/ecommerce-1706103_1280.png"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
