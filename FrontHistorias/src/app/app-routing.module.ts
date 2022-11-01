import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginMainScreenComponent } from './login/login-main-screen/login-main-screen.component';
import { LayoutComponent } from './mainframe/layout/layout.component';
import { CitasComponent } from './user/citas/citas.component';
import { ExamenesComponent } from './user/examenes/examenes.component';
import { HistoriaComponent } from './user/historia/historia.component';

const routes: Routes = [
  { path: 'login', component: LoginMainScreenComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'user', component: LayoutComponent, children: [
      { path: 'citas', component: CitasComponent },
      { path: 'historia', component: HistoriaComponent },
      { path: 'examenes', component: ExamenesComponent },
      { path: 'configuracion', component: ExamenesComponent },]
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
