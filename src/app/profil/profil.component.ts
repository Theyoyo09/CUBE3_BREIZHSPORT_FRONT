import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from '@angular/material/button';

import { historique_commandes } from '../mock/mock-commandes';
import { usersList } from "../mock/mock-users";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {
  moi: number = 2
  icon: string = this.moi == 1 ? "check": "close";
  historiqueCommandes = historique_commandes
  user = usersList[0]
  getQuantiteArticles(commandes: { tableau_articles: any[]; }): number {
    return commandes.tableau_articles.reduce((total, article) => total + article.quantite, 0);
  }

  constructor(private formBuilder: FormBuilder) {}

  monFormulaire: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  });

  get email() {
    return this.monFormulaire.get('email');
  }

  ngOnInit(): void{
    console.log(this.historiqueCommandes);
  }
}
