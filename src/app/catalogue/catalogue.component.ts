import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import des elements de material
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatPaginatorModule} from '@angular/material/paginator';
import { Article } from '../models/model_article';
import { ArticleService } from '../services/article.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule, MatButtonModule, MatChipsModule, MatPaginatorModule],
  providers: [HttpClientModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})

export class CatalogueComponent {
  
  articlesList : Article[] = [];
  
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    //console.log(articlesList);
    this.articleService.ReadALLArticle()
    .subscribe((data)=>{
      this.articlesList = data;
      console.log("tous les articles", this.articleService);
    });
  }
}
