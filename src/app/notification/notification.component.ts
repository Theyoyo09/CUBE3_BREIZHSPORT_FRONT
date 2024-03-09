import { Component, ElementRef, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { Notification } from './notification';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatBadgeModule, MatListModule],
  providers: [NotificationService],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnInit {
  constructor(private notificationService: NotificationService) {}

  notifications: Notification[] = [];
  nbrNotif: any = this.notifications.length;
  isServiceAvailable: boolean = true;

  ngOnInit() {
    this.getNotifications();
  }

  setSeen(orderId: string, type: string): void {
    this.notificationService.setNotificationSeen(orderId, type).subscribe({
      next: () => this.getNotifications(),
      error: () => console.log('Something wrong'),
      complete: () => {},
    });
  }

  getNotifications(): void {
    this.notificationService.getNotifications(1).subscribe({
      next: (res) => {
        console.log('load notifications ', res);
        this.notifications = res;
        this.nbrNotif = res.length;
      },
      error: () => {
        console.log('not available');
        this.isServiceAvailable = false;
      },
      complete: () => {},
    });
  }
}
