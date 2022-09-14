import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  onlineStatusCheck: any = OnlineStatusType;

  constructor(private onlineStatusService: OnlineStatusService){

  }

  ngOnInit(): void {

  }

}
