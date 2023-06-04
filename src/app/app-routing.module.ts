import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth/auth-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { AlmacenRoutingModule } from './almacen/almacen-routing.module';
import { ProveedoresRoutingModule } from './proveedores/proveedores-routing.module';
import { ReparacionesRoutingModule } from './reparaciones/reparaciones-routing.module';
import { VentasRoutingModule } from './ventas/ventas-routing.module';

const routes: Routes = [
  {path:'**', redirectTo:'dashboard', pathMatch:'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HomeRoutingModule,
    AuthRoutingModule,
    AlmacenRoutingModule,
    ProveedoresRoutingModule,
    ReparacionesRoutingModule,
    VentasRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
