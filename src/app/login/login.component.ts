import { Component, OnInit } from '@angular/core';

import { usersList } from '../mock/mock-users'

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule, MatInputModule, FormsModule, ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  usersList = usersList
  result = false;

  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    //console.log(this.usersList);
  }

  loginUser() {
    const emailValue = this.email.value;
    const passwordValue = this.password.value;
    if (emailValue !== null && passwordValue !== null) {
      this._auth.loginUser(emailValue, passwordValue)
        .subscribe({
          next: (res) => {
            if (this.result) {
              this.redirectToProfil();
            }
            console.log(res);
          },
          error: (err) => {
            console.error(err);
          }
        });
    } else {
      console.error('Veuillez saisir un email et un mot de passe valide.');
    }
  };
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'veuillez insérer un email';
    }
    return this.email.hasError('email') ? 'email non conforme' : '';
  };

  redirectToProfil() {
    this.router.navigate(['/profil']);
  };
}


