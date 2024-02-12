import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//import la config de la liste d'objet
import { ConfigComponent } from "./config/config.component";
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from "@angular/material/list";
import { MatBadgeModule } from '@angular/material/badge';

//import les component 
import { HomeComponent } from "./home/home.component";
import { PanierComponent } from './panier/panier.component';
import { notificationList } from './mock/mock-notifications';
// import { login } from './login/login.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ConfigComponent, PanierComponent, HomeComponent, MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatBadgeModule]
})

export class AppComponent {
  constructor(private elementRef: ElementRef) {}
  title = 'CUBE3_BREIZHSPORT_FRONT';
  notifications = notificationList;
  nbrNotif: any = this.notifications.length;

  toggleDisplay(shouldDisplay: boolean): void {
    const notifDialog: HTMLCollectionOf<Element> = this.elementRef.nativeElement.getElementsByClassName('notifCenter');
    for (let i = 0; i < notifDialog.length; i++) {
      const element = notifDialog[i] as HTMLElement;

      if (shouldDisplay) {
        element.style.display = 'flex';
      } else {
        element.style.display = 'none';
      }
    }
  }
}
