import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 open(id)
 {
   console.log( document.getElementById(id));
   document.getElementById(id).classList.toggle("show");
 }
}
