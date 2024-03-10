enum ApiUrl {
  // Local config =============================================
  NOTIFICATION_URL = 'https://app-c3856679-7c0d-4765-9e3a-f2ffa3f53188.cleverapps.io',

  // Prod config =============================================
  // NOTIFICATION_URL = ,
}

export enum NotificationPath {
  BASE_URL = `${ApiUrl.NOTIFICATION_URL}/notifications`,
  GET_NOTIFICATION_NOT_SEEN = '/notseen',
  POST_NOTIFICATION_SEEN = '/seen',
}
