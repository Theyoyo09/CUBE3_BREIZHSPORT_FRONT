import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//import la config de la liste d'objet
import { ConfigComponent } from './config/config.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

//import les component
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification/notification.service';
// import { login } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    ConfigComponent,
    PanierComponent,
    HomeComponent,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    NotificationComponent,
  ],
  providers: [NotificationService],
})
export class AppComponent {
  constructor(private elementRef: ElementRef) {}
  title = 'CUBE3_BREIZHSPORT_FRONT';
}
