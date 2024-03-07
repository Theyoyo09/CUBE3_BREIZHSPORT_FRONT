import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import des elements de material
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatPaginatorModule} from '@angular/material/paginator';
//import des mocks
import { CommandeService } from "../services/commande.service";
import { Commande } from "../models/model_commande";
import { articlesList } from '../mock/mock-articles';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule, MatButtonModule, MatChipsModule, MatPaginatorModule, FormsModule, MatInputModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.scss'
})
export class PanierComponent implements OnInit {
  constructor(private commandeService: CommandeService) {}
  prix:number = 10.20;
  articlesList = articlesList
  totalArticle = articlesList.length

  displayCommande() {
    let formEmailTel = document.getElementById("valideCommande");
    if(formEmailTel){
      formEmailTel.style.display="flex";
    };
  };

  valideCommande(commandeForm: NgForm) {
    if (commandeForm.invalid) {
      return;
    }

    const formData = commandeForm.value;

    const commande: Commande = {
      idUser: '1',
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      listArticles: [],
      statusCommande: "false",
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.commandeService.addCommande(commande).subscribe({
      next(value){ return console.log('Commande ajoutée avec succès.' + value); },
      error(err){ return console.error('Erreur lors de l\'ajout de la commande :', err) },
      complete(){ return console.log('commande ajoutée go back to home'); }
    });
  }

  ngOnInit(): void {
    //console.log(articlesList);
  }
}
