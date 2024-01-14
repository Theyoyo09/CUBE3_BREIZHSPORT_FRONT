import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//import des elements de ngx-bootstrap
import { SlickCarouselModule } from 'ngx-slick-carousel';

//import des elements de material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

//import des mocks
import { articlesList } from '../models/mock-articles';

//import les component 
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { ContactComponent } from '../contact/contact.component';
import { AproposComponent } from '../apropos/apropos.component';
import { PanierComponent } from '../panier/panier.component';
// import { login } from './login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlickCarouselModule, MatButtonModule, MatCardModule, CommonModule, MatTabsModule, CatalogueComponent, ContactComponent, AproposComponent, PanierComponent],
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
