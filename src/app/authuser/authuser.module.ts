import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AUTH_STATE_NAME } from './authenticationState/auth.selector';
import { authUserReducer } from './authenticationState/auth.reducer';

const routes:Routes = [
  {path: '', children:[
    // {
    //   path: '', redirectTo:'/login', pathMatch:'full'
    // },
    {
      path:'login',component:LoginComponent
    },
    {
      path: 'signup', component:SignupComponent
    }
  ]}
]

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    //StoreModule.forFeature(AUTH_STATE_NAME, authUserReducer),
    RouterModule.forChild(routes)
  ]
})
export class AuthuserModule { }
