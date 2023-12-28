import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PanierComponent } from './panier/panier.component';
import { MentionLegalesComponent } from './mention-legales/mention-legales.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'not_found', component: NotFoundComponent},
    { path: 'login', component:  LoginComponent},
    { path: 'panier', component: PanierComponent},
    { path: 'mention_legales', component: MentionLegalesComponent},
    // { path: ' ', redirectTo: '/accueil'},
    // { path: '**', redirectTo: '/not_found'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
