import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'registration', component: RegistrationComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }