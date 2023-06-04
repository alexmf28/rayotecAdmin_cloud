import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarVentasComponent } from './pages/registrar-ventas/registrar-ventas.component';
const routes: Routes = [
  {path:'ventas', component:RegistrarVentasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
