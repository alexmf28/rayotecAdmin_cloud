import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarVentasComponent } from './pages/registrar-ventas/registrar-ventas.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistrarVentasComponent
  ],
  imports: [
    CommonModule,    
    SharedModule,
    ReactiveFormsModule
    
  ]
})
export class VentasModule { }
