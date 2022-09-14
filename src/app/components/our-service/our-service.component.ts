import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent implements OnInit {

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
