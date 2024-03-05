enum notification_type{
    NEW_ORDER,
    NEW_TRANSPORTER_TRACKING,
    ARRIVED_RELAY_POINT,
    ARRIVED_HOME
}

export class notification {
    idUser!: string;
    command_id!: number;
    track_id!: string;
    email!: string;
    phone_number!: string;
    dateTime!: Date;
    notification_type!: notification_type;
    description!: string;
    titre!: string;
}