import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, catchError, map, throwError } from 'rxjs';

import { Notification } from './notification';
import { NotificationPath } from '../utils/api-paths';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //Authorization: 'my-auth-token',
  }),
};

@Injectable()
export class NotificationService {
  constructor(private http: HttpClient) {}

  /** GET notifications from the server */
  getNotifications(userId: Number): Observable<Notification[]> {
    return this.http
      .get<Notification[]>(
        `${NotificationPath.BASE_URL}/${userId}${NotificationPath.GET_NOTIFICATION_NOT_SEEN}`
      )
      .pipe(
        catchError((error) => {
          return throwError(() => new Error(error));
        })
      );
  }

  /** POST: seen notification from the front */
  setNotificationSeen(orderId: string, type: string) {
    return this.http
      .post<any>(
        `${NotificationPath.BASE_URL}${NotificationPath.POST_NOTIFICATION_SEEN}`,
        { orderId: orderId, type: type },
        httpOptions
      )
      .pipe(
        catchError((error) => {
          return throwError(() => new Error(error));
        })
      );
  }
}
