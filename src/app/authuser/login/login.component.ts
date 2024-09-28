import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Authuser } from '../../model/auth.interface';
import { loginStart } from '../authenticationState/auth.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logingForm!: FormGroup;

  constructor(private store:Store<AppState>, private readonly router:Router){}

  ngOnInit(): void {

      this.logingForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  onLoginSubmit(){
    //const authuser:Authuser = {
      const username =  this.logingForm.value.username;
      const password =  this.logingForm.value.password
    //};
    this.store.dispatch(loginStart({username, password}));
    this.router.navigate(['/userList']);
  }
}
