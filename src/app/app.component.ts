import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLinkActive, RouterOutlet } from '@angular/router';

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
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
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
    MatListModule,
    NotificationComponent,
    HttpClientModule,
    RouterLinkActive
  ],
  providers: [NotificationService, HttpClientModule],
})

export class AppComponent {
  constructor(private elementRef: ElementRef, private router: Router) {}
  title = 'CUBE3_BREIZHSPORT_FRONT';

  redirectToHome() {
    this.router.navigate(['/home']);
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  redirectToPanier() {
    this.router.navigate(['/panier']);
  }

}