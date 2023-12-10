import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from "../config.service";

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styles: ''
})
export class ConfigComponent {
  articles = [
    {id: 666, nom: "Chaussette", prix: 2000000, quantité: 1, description: "les chaussettes de l\'archiduchesse sont-elles seche archi seche", photo: "http://placehold.it/350x150/111111"},
    {id: 999, nom: "l\'autre Chaussette", prix: 2000000, quantité: 1, description: "les chaussettes de l\'archiduchesse sont-elles seche archi seche", photo: "http://placehold.it/350x150/333333"}
  ];
  static articles: any;
  /*constructor(private configService: ConfigService) {}

  showConfig() {
    this.configService.getConfig()
      .subscribe(data => this.config = {
          heroesUrl: data.heroesUrl,
          textfile:  data.textfile,
          date: data.date,
      });
  }*/
}
