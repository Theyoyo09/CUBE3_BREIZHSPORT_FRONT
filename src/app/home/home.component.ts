import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//import des elements de ngx-bootstrap
import { SlickCarouselModule } from 'ngx-slick-carousel';

//import des elements de material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

//import des mocks
import { articlesList } from '../models/mock-articles';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlickCarouselModule, MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  slideConfig = {
    "slidesToShow": 1,
    "slideToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 500000,
    "pauseOnHover": true,
    "infinite": true,
  } 
  articlesList = articlesList
  ngOnInit(): void {
    console.log(articlesList);
  }

}
