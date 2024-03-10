import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//import des elements de ngx-bootstrap
import { SlickCarouselModule } from 'ngx-slick-carousel';

//import des elements de material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

//import des mocks
//import { articlesList } from '../mock/mock-articles';

//import les component 
import { ArticleService } from "../services/article.service";
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { ContactComponent } from '../contact/contact.component';
import { AproposComponent } from '../apropos/apropos.component';
import { PanierComponent } from '../panier/panier.component';
import { Article } from '../models/model_article';
import { HttpClientModule } from '@angular/common/http';
import { Panier } from '../models/model_panier';
import { PanierData } from '../models/model_panier_data';
import { PanierService } from '../services/panier.service';
// import { login } from './login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlickCarouselModule, MatButtonModule, MatCardModule, CommonModule, MatTabsModule, CatalogueComponent, ContactComponent, AproposComponent, PanierComponent],
  providers: [HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  articlesList : Article[] = [];

  constructor(private articleService: ArticleService, private panierService : PanierService) {}

  slideConfig = {
    "slidesToShow": 1,
    "slideToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 500000,
    "pauseOnHover": true,
    "infinite": true,
  };

  addToPanier(idUser: string, idArticle: string, quantite: number) {
    const panierData: PanierData = { idUser, idArticle, quantite };
    this.panierService.addArticleToPanier(panierData)
      .subscribe(result => {
        if (result) {
          console.log('Article ajouté au panier avec succès !');
        } else {
          console.error('Une erreur s\'est produite lors de l\'ajout de l\'article au panier.');
        }
      });
  }

  ngOnInit(): void {
    //console.log(articlesList);
    this.articleService.ReadALLArticle()
    .subscribe((data)=>{
      this.articlesList = data;
      console.log("tous les articles", this.articlesList);
    });
  }

}
