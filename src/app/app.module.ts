import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { ListarComponent } from './componentes/licitaciones/listar/listar.component';
import { CargarComponent } from './componentes/licitaciones/cargar/cargar.component';
import { CrearComponent } from './componentes/licitaciones/crear/crear.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavegacionComponent,
    ListarComponent,
    CargarComponent,
    CrearComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
