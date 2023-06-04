import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { VerImagenesProductoComponent } from './pages/ver-imagenes-producto/ver-imagenes-producto.component';
import { MarcasComponent } from './pages/marcas/marcas.component';
import { ModelosComponent } from './pages/modelos/modelos.component';

const routes: Routes = [
  {path:'productos', component:ProductosComponent},
  
  {path:'producto/:idProducto', component:ProductoComponent},
  {path:'producto/imagenes/:idProducto', component:VerImagenesProductoComponent},
  {path:'producto', component:ProductoComponent},


  {path:'marcas', component:MarcasComponent},
  {path:'modelos', component:ModelosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AlmacenRoutingModule { }
