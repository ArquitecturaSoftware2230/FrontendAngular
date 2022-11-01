import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { LoginMainScreenComponent } from './login/login-main-screen/login-main-screen.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { SidebarComponent } from './mainframe/sidebar/sidebar.component';
import { HeaderComponent } from './mainframe/header/header.component';
import { LayoutComponent } from './mainframe/layout/layout.component';
import { HistoriaComponent } from './user/historia/historia.component';
import { CitasComponent } from './user/citas/citas.component';
import { ExamenesComponent } from './user/examenes/examenes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginMainScreenComponent,
    LoginFormComponent,
    SidebarComponent,
    HeaderComponent,
    LayoutComponent,
    HistoriaComponent,
    CitasComponent,
    ExamenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
