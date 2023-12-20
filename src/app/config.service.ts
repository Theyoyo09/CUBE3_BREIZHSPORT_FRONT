import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'assets/config.json';

  /*getConfig() {
    return this.http.get<Config>(this.configUrl);
  }*/

  constructor () {}
}
