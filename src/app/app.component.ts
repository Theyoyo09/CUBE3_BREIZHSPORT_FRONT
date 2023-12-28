import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//import des elements de material
import {MatTabsModule} from '@angular/material/tabs';

//import la config de la liste d'objet
import { ConfigComponent } from "./config/config.component";
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

//import les component 
import { HomeComponent } from "./home/home.component";
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
import { PanierComponent } from './panier/panier.component';
// import { login } from './login/login.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, MatTabsModule, CatalogueComponent, ContactComponent, AproposComponent, ConfigComponent, PanierComponent, HomeComponent, MatIconModule, MatCardModule, MatButtonModule]
})
export class AppComponent {
  title = 'CUBE3_BREIZHSPORT_FRONT';
  constructor() {}
  
}
