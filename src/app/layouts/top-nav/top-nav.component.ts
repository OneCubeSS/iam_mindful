import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  private listTitles: any[];
  location: Location;
    mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor() {

  }

  ngOnInit(){
  }




}

