import { notification } from "../models/model_notification";
import { historique_commandes } from "./mock-commandes";
import { usersList } from "./mock-users";

export const notificationList: notification[] = [
    {
        user_id: usersList[0].id,
        command_id: historique_commandes[0].id,
        track_id: "1",
        email: usersList[0].email,
        phone_number: "07.07.07.07.07",
        dateTime: new Date(20240101),
        notification_type: 2,
        titre: "colis livré",
        description: "colis livré dans votre relais"
    },
    {
        user_id: usersList[0].id,
        command_id: historique_commandes[0].id,
        track_id: "1",
        email: usersList[0].email,
        phone_number: "07.07.07.07.07",
        dateTime: new Date(20240101),
        notification_type: 2,
        titre: "colis livré",
        description: "colis livré dans votre relais"
    },
    {
        user_id: usersList[0].id,
        command_id: historique_commandes[0].id,
        track_id: "1",
        email: usersList[0].email,
        phone_number: "07.07.07.07.07",
        dateTime: new Date(20240101),
        notification_type: 2,
        titre: "colis livré",
        description: "colis livré dans votre relais"
    },
    {
        user_id: usersList[0].id,
        command_id: historique_commandes[0].id,
        track_id: "1",
        email: usersList[0].email,
        phone_number: "07.07.07.07.07",
        dateTime: new Date(20240101),
        notification_type: 2,
        titre: "colis livré",
        description: "colis livré dans votre relais"
    },
    {
        user_id: usersList[0].id,
        command_id: historique_commandes[0].id,
        track_id: "1",
        email: usersList[0].email,
        phone_number: "07.07.07.07.07",
        dateTime: new Date(20240101),
        notification_type: 2,
        titre: "colis livré",
        description: "colis livré dans votre relais"
    },
    
]
