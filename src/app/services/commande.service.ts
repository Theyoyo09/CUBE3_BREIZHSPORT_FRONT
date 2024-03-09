import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Commande } from "../models/model_commande";

@Injectable({
    providedIn: 'root'
})

export class CommandeService {
    private apiUrl = 'https://app-7e78b033-20d8-45a5-908b-e90dee9e7060.cleverapps.io/api/cmd';

    constructor(private http: HttpClient) {}

    getAllCommandes(idUser: string): Observable< Commande[] > {
        const url = `${this.apiUrl}/${idUser}`;
        return this.http.get<Commande[]>(url);
    }

    addCommande(commande: Commande): Observable<Commande> {
        console.log(commande);
        return this.http.post<Commande>(this.apiUrl, commande);
    }

    deleteCommande(idCommande: string): Observable<void> {
        const url = `${this.apiUrl}/${idCommande}`;
        return this.http.delete<void>(url);
    }
};