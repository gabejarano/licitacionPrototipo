import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './componentes/login/login.component';
import {DashboardComponent} from './componentes/dashboard/dashboard.component';
import {ListarComponent} from './componentes/licitaciones/listar/listar.component';
import {CargarComponent} from './componentes/licitaciones/cargar/cargar.component';
import {CrearComponent} from './componentes/licitaciones/crear/crear.component';

import { AuthGuard } from './guards/auth.guard';
import {NoGuardGuard} from './guards/no-guard.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[NoGuardGuard],
  },
  {
    path: 'licitaciones/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'licitaciones/listar',
    component: ListarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'licitaciones/cargar',
    component: CargarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'licitaciones/crear',
    component: CrearComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
