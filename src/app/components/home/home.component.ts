import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    {'image': 'https://davidsummertonconsulting.files.wordpress.com/2018/04/team-types.jpg'},
    {'image': 'https://miro.medium.com/max/14138/1*2F0FlFvN1WSwEKBf7R_-1A.jpeg'}, 
  {'image': 'https://www.systemnetworks.com/wp-content/uploads/2014/08/bigstock-Team-Of-Business-People-Workin-45022012.jpg'}, 
  {'image': 'https://i.pinimg.com/736x/3f/ea/5f/3fea5f444fa5a40be46ca7b0f29c21df.jpg'}];

  constructor() { }

  ngOnInit() {
  }
  

}
