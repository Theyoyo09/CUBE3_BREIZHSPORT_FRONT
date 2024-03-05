import { Component, OnInit } from '@angular/core';

import { usersList } from '../mock/mock-users'

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './auth.service';
import { user } from '../models/model_user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  usersList = usersList
  loginUserData = { user }
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    //console.log(this.usersList);
  }

  loginUser(){ 
    this._auth.loginUser(this.loginUserData)
    .subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'veuillez insérer un email';
    }
    return this.email.hasError('email') ? 'email non conforme' : '';
  }

}
