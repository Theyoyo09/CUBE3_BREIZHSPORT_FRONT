enum ApiUrl {
  // Local config =============================================
  NOTIFICATION_URL = 'https://app-99741378-9020-4ab8-ba5d-a3a3928eb833.cleverapps.io',

  // Prod config =============================================
  // NOTIFICATION_URL = ,
}

export enum NotificationPath {
  BASE_URL = `${ApiUrl.NOTIFICATION_URL}/notifications`,
  GET_NOTIFICATION_NOT_SEEN = '/notseen',
  POST_NOTIFICATION_SEEN = '/seen',
}
