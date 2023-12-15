import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import des elements de material
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

//import des mocks
import { articlesList } from '../mock-articles';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule, MatButtonModule, MatChipsModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent implements OnInit {
  articlesList = articlesList
  ngOnInit(): void {
    console.log(articlesList);
  }

}
