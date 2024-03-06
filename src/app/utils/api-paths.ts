enum ApiUrl {
  // Local config =============================================
  NOTIFICATION_URL = 'http://localhost:8080',

  // Prod config =============================================
  // NOTIFICATION_URL = ,
}

export enum NotificationPath {
  BASE_URL = `${ApiUrl.NOTIFICATION_URL}/notifications`,
  GET_NOTIFICATION_NOT_SEEN = '/notseen',
  POST_NOTIFICATION_SEEN = '/seen',
}
