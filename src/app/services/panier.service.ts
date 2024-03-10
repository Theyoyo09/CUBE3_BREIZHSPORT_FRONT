import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Panier } from "../models/model_panier";
import { PanierData } from "../models/model_panier_data";

@Injectable({
    providedIn: 'root'
})

export class PanierService {
    private apiUrl = 'https://app-43044da9-8e23-4575-ac49-183a05ee0bee.cleverapps.io';

    constructor(private http: HttpClient) {}

    Read(idUser : string): Observable< Panier > {
        const url = `${this.apiUrl}/GetPanier?iduser=${idUser}`;
        return this.http.get<Panier>(url);
    };

    addArticleToPanier(panierData: PanierData): Observable<boolean> {
        const url = `${this.apiUrl}/AddArticleToPanier?iduser=${panierData.idUser}&idarticle=${panierData.idArticle}&quantite=${panierData.quantite}`;
        return this.http.post<boolean>(url, null);
    };
};