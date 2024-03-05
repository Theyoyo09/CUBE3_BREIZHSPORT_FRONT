import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Commande } from "../models/model_commandes";

@Injectable({
    providedIn: 'root'
})

export class CommandeService {
    private apiUrl = 'http://localhost:3000/api/cmd';

    constructor(private http: HttpClient) {}

    getAllCommandes(idUser: string): Observable< typeof Commande[] > {
        const url = `${this.apiUrl}/${idUser}`;
        return this.http.get< typeof Commande[] >(url);
    }

    addCommande(commande: typeof Commande): Observable<typeof Commande> {
        console.log(commande);
        return this.http.post<typeof Commande>(this.apiUrl, commande);
    }

    deleteCommande(idCommande: string): Observable<void> {
        const url = `${this.apiUrl}/${idCommande}`;
        return this.http.delete<void>(url);
    }
};