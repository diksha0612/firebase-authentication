import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { SignUpComponent } from './_components/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', redirectTo: 'signup', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path: 'signup', component:SignUpComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
