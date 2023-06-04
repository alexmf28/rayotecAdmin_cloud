import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { VerProveedoresComponent } from './pages/ver-proveedores/ver-proveedores.component';

const routes: Routes = [
  {path:'proveedores', component:VerProveedoresComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class ProveedoresRoutingModule { }
