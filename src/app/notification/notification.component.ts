import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { Notification } from './notification';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatListItem } from '@angular/material/list';
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    MatTableModule,
    MatButtonModule,
    MatListItem
  ],
  providers: [NotificationService],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnInit {
  constructor(
    private notificationService: NotificationService,
    private elementRef: ElementRef
  ) {}

  notifications: Notification[] = [];
  nbrNotif: any = this.notifications.length;
  isServiceAvailable: boolean = true;
  isDisplayed: boolean = false;
  isClickInside: boolean = false;

  displayedColumns: string[] = [
    'orderId',
    'date',
    'title',
    'description',
    'actions',
  ];

  ngOnInit() {
    this.getNotifications();
  }

  @HostListener('click')
  clicked() {
    this.isClickInside = true;
  }

  @HostListener('document:click')
  clickedOut() {
    if (this.isDisplayed && !this.isClickInside) {
      this.toggleDisplay();
    }
    this.isClickInside = false;
  }

  toggleDisplay(): void {
    if (
      this.notifications.length !== 0 ||
      this.isDisplayed ||
      !this.isServiceAvailable
    ) {
      this.isDisplayed = !this.isDisplayed;
      const notifDialog: HTMLCollectionOf<Element> =
        this.elementRef.nativeElement.getElementsByClassName('notifCenter');
      for (let i = 0; i < notifDialog.length; i++) {
        const element = notifDialog[i] as HTMLElement;
        console.log(element);
        if (this.isDisplayed) {
          element.style.display = 'flex';
        } else {
          element.style.display = 'none';
        }
      }
    }
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
        if (this.notifications.length == 0) {
          this.toggleDisplay();
        }
      },
      error: () => {
        this.isServiceAvailable = false;
      },
      complete: () => {},
    });
  }
}
