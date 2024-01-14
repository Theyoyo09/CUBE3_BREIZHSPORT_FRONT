import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import des elements de material
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatPaginatorModule} from '@angular/material/paginator';
//import des mocks
import { articlesList } from '../models/mock-articles';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule, MatButtonModule, MatChipsModule, MatPaginatorModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.scss'
})
export class PanierComponent implements OnInit {
  prix:number = 10.20;
  articlesList = articlesList
  totalArticle = articlesList.length
  ngOnInit(): void {
    console.log(articlesList);
  }
}
