import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GestionarReparacionesComponent } from './pages/gestionar-reparaciones/gestionar-reparaciones.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GestionarReparacionesComponent
  ],
  imports: [
    CommonModule,   
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[
    GestionarReparacionesComponent
  ]
})
export class ReparacionesModule { }
