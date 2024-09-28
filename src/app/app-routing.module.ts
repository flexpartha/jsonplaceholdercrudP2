import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', redirectTo:'/auth/login', pathMatch:'full'
  },
  {
    path: 'userList',
    loadChildren: ()=> import('./user/user.module').then(mod =>mod.UserModule),
  },
  {
    path: 'adduser',
    loadChildren: () => import('./adduser/adduser.module').then(mod => mod.AdduserModule)
  },
  {
    path: 'edituser',
    loadChildren: () => import('./edituser/edituser.module').then(mod => mod.EdituserModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./authuser/authuser.module').then(mod => mod.AuthuserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
