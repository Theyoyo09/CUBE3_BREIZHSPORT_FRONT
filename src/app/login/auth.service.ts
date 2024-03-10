import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
    private apiUrl = "https://app-99741378-9020-4ab8-ba5d-a3a3928eb833.cleverapps.io/api/Authentification"

    constructor(private http: HttpClient) { }

    loginUser(email : string, mdp : string): Observable< boolean > {
        const url = `${this.apiUrl}/Connexion?email=${email}&mdp=${mdp}`;
        return this.http.get<boolean>(url);
    };
}