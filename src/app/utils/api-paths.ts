enum ApiUrl {
  // Local config =============================================
  NOTIFICATION_URL = 'https://app-791d8b56-4d65-4aa5-8876-67ba29a0fbc3.cleverapps.io',

  // Prod config =============================================
  // NOTIFICATION_URL = ,
}

export enum NotificationPath {
  BASE_URL = `${ApiUrl.NOTIFICATION_URL}/notifications`,
  GET_NOTIFICATION_NOT_SEEN = '/notseen',
  POST_NOTIFICATION_SEEN = '/seen',
}
