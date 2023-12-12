import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//import des elements de ngx-bootstrap
import { SlickCarouselModule } from 'ngx-slick-carousel';

//import des elements de material
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';

//import la config de la liste d'objet
import { ConfigComponent } from "./config/config.component";

//import les component 
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';

//import des mocks
import { articlesList } from './mock-articles';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTabsModule, CatalogueComponent, ContactComponent, AproposComponent, SlickCarouselModule, MatCardModule, ConfigComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'CUBE3_BREIZHSPORT_FRONT';
  articlesList = articlesList
  slideConfig = {
    "slidesToShow": 1,
    "slideToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 500000,
    "pauseOnHover": true,
    "infinite": true,
  } 
  constructor() {}
  ngOnInit(): void {
    console.log(articlesList);
  }
}
