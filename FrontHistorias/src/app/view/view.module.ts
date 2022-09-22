import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './Layout/base/base.component';
import { HeaderComponent } from './Layout/header/header.component';
import { LoginComponent } from './login/login.component';

import { CrearHistoriaComponent } from './crear-historia/crear-historia.component';
import { HistoriaComponent } from './historia/historia.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';

const routes: Routes = [
  {
    path: "Login",
    component: LoginComponent
  },
  {
    path: "",
    redirectTo: "Login",
    pathMatch: "full"
  },
  {
    path: "Main",
    component: BaseComponent,
    children :[
      {
        path: "Crear",
        component: CrearHistoriaComponent
      },
      {
        path: "historia",
        component: HistoriaComponent
      },
      {
        path: "historia/:id",
        component: HistoriaComponent
      }
    ]
  }
]

@NgModule({
  
  declarations: [
    BaseComponent,
    HeaderComponent,
    LoginComponent,
    CrearHistoriaComponent,
    HistoriaComponent
    
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatGridListModule
  ]
})
export class ViewModule { }
