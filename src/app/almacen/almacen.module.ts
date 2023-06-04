import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AngularEditorModule } from '@kolkov/angular-editor';

import { SharedModule } from '../shared/shared.module';

import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { VerImagenesProductoComponent } from './pages/ver-imagenes-producto/ver-imagenes-producto.component';
import { MarcasComponent } from './pages/marcas/marcas.component';
import { ModelosComponent } from './pages/modelos/modelos.component';

import { RichTextComponent } from './components/rich-text/rich-text.component';

@NgModule({
  declarations: [
    ProductosComponent,
    ProductoComponent,
    VerImagenesProductoComponent,
    MarcasComponent,
    ModelosComponent,

    RichTextComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    AngularEditorModule,

    SharedModule
  ],
  exports:[
    ProductosComponent,
    ProductoComponent,
    VerImagenesProductoComponent,
    MarcasComponent,
    ModelosComponent,

    RichTextComponent
  ]
})
export class AlmacenModule { }
