import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Article } from "../models/model_article";

@Injectable({
    providedIn: 'root'
})

export class ArticleService {
    private apiUrl = 'https://app-d0908903-85d3-486f-92e6-e64da02211f5.cleverapps.io';

    constructor(private http: HttpClient) {}

    ReadALLArticle(): Observable< Article[] > {
        const url = `${this.apiUrl}/ReadALLArticle`;
        return this.http.get<Article[]>(url);
    }
};