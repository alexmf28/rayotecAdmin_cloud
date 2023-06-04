import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VerProveedoresComponent } from './pages/ver-proveedores/ver-proveedores.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    VerProveedoresComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    SharedModule
  ],
  exports:[
    VerProveedoresComponent
  ]
})
export class ProveedoresModule { }
