import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { LoginMainScreenComponent } from './login/login-main-screen/login-main-screen.component';
import { LayoutComponent } from './mainframe/layout/layout.component';
import { CitasComponent } from './user/citas/citas.component';
import { HistoriaComponent } from './user/historia/historia.component';
import { MedicamentosComponent } from './user/medicamentos/medicamentos.component';

const routes: Routes = [
  { path: 'login', component: LoginMainScreenComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'afiliado', component: LayoutComponent, children: [
      { path: 'citas', component: CitasComponent },
      { path: 'historiaclinica', component: HistoriaComponent },
      { path: 'medicamentos', component: MedicamentosComponent },
      { path: 'configuracion', component: ConfiguracionComponent },]
  },
  {
    path: 'role_admin', component: LayoutComponent, children: [
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'configuracion', component: ConfiguracionComponent },
      { path: 'crearusuario', component: CreateUserComponent }
    ]
  },
  // { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
