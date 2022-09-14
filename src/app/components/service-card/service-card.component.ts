import { faCoffee } from './../../../../node_modules/@fortawesome/free-solid-svg-icons/faCoffee.d';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  @Input() service: any;
  facebook = faCoffee;
  constructor() { }

  ngOnInit(): void {
  }

}
