import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarReparacionesComponent } from './pages/gestionar-reparaciones/gestionar-reparaciones.component';
const routes: Routes = [
  {path:'reparaciones', component:GestionarReparacionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ReparacionesRoutingModule { }
