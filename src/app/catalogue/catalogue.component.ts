import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import des elements de material
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatPaginatorModule} from '@angular/material/paginator';


//import des mocks
import { articlesList } from '../mock/mock-articles';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule, MatButtonModule, MatChipsModule, MatPaginatorModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent implements OnInit {
  articlesList = articlesList
  totalArticle = articlesList.length
  ngOnInit(): void {
    //console.log(articlesList);
  }
}
// export class PaginatorConfigurableExample {
//   length = totalArticle;
//   pageSize = 10;
//   pageSizeOptions = [5, 10, 25, 100];
// }
