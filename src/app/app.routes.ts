import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PanierComponent } from './panier/panier.component';
import { MentionLegalesComponent } from './mention-legales/mention-legales.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfilComponent } from './profil/profil.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component:  LoginComponent},
    { path: 'panier', component: PanierComponent},
    { path: 'mention_legales', component: MentionLegalesComponent},
    { path: 'profil', component: ProfilComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
