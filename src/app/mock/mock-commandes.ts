import { commande } from "../models/model_commande";

export const historique_commandes: commande[] = [
    {
        id: 10,
        date: new Date(20240101),
        tableau_articles:[
            {
                id: 7,
                nom: "Chaussette",
                prix: 2000000,
                quantite: 1,
                description: "les chaussettes de l\'archiduchesse sont-elles seche archi seche",
                photo: "../assets/images/Capture d'écran 2023-05-12 140359.png"
            },
            {
                id: 999, 
                nom: "l\'autre Chaussette", 
                prix: 2000000, 
                quantite: 1, 
                description: "les chaussettes de l\'archiduchesse sont-elles seche archi seche", 
                photo: "../assets/images/Capture d'écran 2023-11-13 113539.png"
            },
            {
                id: 999, 
                nom: "l\'autre Chaussette", 
                prix: 2000000, 
                quantite: 1, 
                description: "les chaussettes de l\'archiduchesse sont-elles seche archi seche", 
                photo: "../assets/images/Capture d'écran 2023-11-13 113539.png"
            }
        ]
    },
    {
        id: 11,
        date: new Date(20240101),
        tableau_articles:[
            {
                id: 7,
                nom: "Chaussette",
                prix: 2000000,
                quantite: 1,
                description: "les chaussettes de l\'archiduchesse sont-elles seche archi seche",
                photo: "../assets/images/Capture d'écran 2023-05-12 140359.png"
            },
            {
                id: 999, 
                nom: "l\'autre Chaussette", 
                prix: 2000000, 
                quantite: 1, 
                description: "les chaussettes de l\'archiduchesse sont-elles seche archi seche", 
                photo: "../assets/images/Capture d'écran 2023-11-13 113539.png"
            },
            {
                id: 911,
                nom: "avion",
                prix: 911,
                quantite: 2,
                description: "ça passe pas",
                photo: "../assets/images/911.png"
            }
        ]
    },
    {
        id: 12,
        date: new Date(20240101),
        tableau_articles:[
            {
                id: 7,
                nom: "Chaussette",
                prix: 2000000,
                quantite: 1,
                description: "les chaussettes de l\'archiduchesse sont-elles seche archi seche",
                photo: "../assets/images/Capture d'écran 2023-05-12 140359.png"
            },
            {
                id: 999, 
                nom: "l\'autre Chaussette", 
                prix: 2000000, 
                quantite: 1, 
                description: "les chaussettes de l\'archiduchesse sont-elles seche archi seche", 
                photo: "../assets/images/Capture d'écran 2023-11-13 113539.png"
            },
            {
                id: 911,
                nom: "avion",
                prix: 911,
                quantite: 2,
                description: "ça passe pas",
                photo: "../assets/images/911.png"
            }
        ]
    }
]
