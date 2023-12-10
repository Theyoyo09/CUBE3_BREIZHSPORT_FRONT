import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatCardModule} from '@angular/material/card';
import { ConfigComponent } from "./config/config.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTabsModule, CatalogueComponent, ContactComponent, AproposComponent, SlickCarouselModule, MatCardModule, ConfigComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CUBE3_BREIZHSPORT_FRONT';
  articles: any = [];
  slideConfig = {
    "slidesToShow": 1,
    "slideToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "pauseOnHover": true,
    "infinite": true,
  }  

  constructor(){
    this.articles = this.fetchData().then(data => data);
  }
  fetchData() {
    let articles = ConfigComponent.articles
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(articles);
      }, 3000)
    })
  }
}
