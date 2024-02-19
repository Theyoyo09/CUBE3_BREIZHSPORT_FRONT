import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    private _loginUrl = "endpoint de login"

    constructor(private http: HttpClient) { }

    loginUser(user: any) {
        return this.http.post<any>(this._loginUrl, user)
    }
}