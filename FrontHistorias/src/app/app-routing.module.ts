import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginMainScreenComponent } from './login/login-main-screen/login-main-screen.component';
import { LayoutComponent } from './mainframe/layout/layout.component';

const routes: Routes = [
  {path: 'login', component: LoginMainScreenComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'user',component: LayoutComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
