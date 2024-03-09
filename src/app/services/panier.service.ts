import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Panier } from "../models/model_panier";

@Injectable({
    providedIn: 'root'
})

export class PanierService {
    private apiUrl = 'https://app-43044da9-8e23-4575-ac49-183a05ee0bee.cleverapps.io';

    constructor(private http: HttpClient) {}

    Read(idUser : string): Observable< Panier > {
        const url = `${this.apiUrl}/GetPanier?iduser=${idUser}`;
        return this.http.get<Panier>(url);
    }
};