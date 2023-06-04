import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Reparacion } from '../../interfaces/reparacion';
import { ReparacionesService } from '../../services/reparaciones.service';
import { MessageBox } from 'src/app/shared/Helpers/MessageBox';
import { JQuery } from 'src/app/shared/Helpers/JQuery';
@Component({
  selector: 'app-gestionar-reparaciones',
  templateUrl: './gestionar-reparaciones.component.html',
  styleUrls: ['./gestionar-reparaciones.component.css']
})
export class GestionarReparacionesComponent implements OnInit {

  columns = ['Código de reparacion', 'Técnico', 'Teléfono', 'Nombre Cliente', 'Fecha Entrada', 'Fecha Salida', 'Descripción', 'Estado'];
     
  title:string = '';
  action:string = '';

  reparaciones:Array<Reparacion> = [];

  constructor(
    private fb:FormBuilder,
    private reparacionesService:ReparacionesService
  ) { }

  ngOnInit(): void { 
    //this.getReparaciones()
   }
  reparacionesForm = this.fb.group({
   
  })

  get_model(model:string): FormControl {
    return this.reparacionesForm.get(model) as FormControl
  }

  push(method:string) {
    if(method == 'new') { this.openFormCreate(); }
  }

  openFormCreate() {
    this.reparacionesForm.reset();

    this.get_model('id').enable();

    this.title = 'Nueva Reparacion';
    this.action = 'CREATE';
  }

  openFormUpdate(reparacion:Reparacion) {
    this.reparacionesForm.reset();

    this.get_model('id').disable();
    this.get_model('codigo').disable();
    this.get_model('tecnico').disable();
    this.get_model('fechaEntrada').disable();
    this.reparacionesForm.setValue(reparacion);

    this.title = `Reparacion ${reparacion.id}`;
    this.action = 'UPDATE';
  }

  // takeAction() {
  //   switch(this.action) {
  //     case 'CREATE': this.createReparacion();
  //       break;
  //     case 'UPDATE': this.updateReparacion();
  //       break;
  //   }
  // }

  // async createReparacion() {    
  //   await this.get_model('id').setValue(parseInt(this.get_model('id').value))
  //   await this.get_model('codigo').setValue('')
  //   await this.get_model('tecnico').setValue('')
  //   await this.get_model('telefono').setValue(parseInt(this.get_model('telefono').value))
  //   await this.get_model('nombreCliente').setValue('')
  //   await this.get_model('fechaEntrada').setValue(this.get_model('fechaEntrada').value)
  //   await this.get_model('descripcion').setValue('')  
  //   await this.get_model('estado').setValue('true')

  //   console.log(this.reparacionesForm.value)

  //   this.reparacionesService.create_reparacion(this.reparacionesForm.value).subscribe(
  //     data => {
  //       MessageBox.success('Se creó correctamente');
  //       JQuery.closeModal('ModalForm');
  //       this.getReparaciones();
  //     },
  //     err => {
  //       MessageBox.error(err);
  //     }
  //   )
  // }

  // async updateReparacion() {

  //   this.get_model('id').enable()
  //   this.get_model('contacto').enable()
  //   this.get_model('nombre').enable()

  //   await this.get_model('nombre').setValue('')
  //   await this.get_model('contacto').setValue('')
  //   await this.get_model('telefono').setValue(parseInt(this.get_model('telefono').value))
  //   await this.get_model('nro_doc').setValue(parseInt(this.get_model('nro_doc').value))


  //   console.log(this.reparacionesForm.value)

  //   this.reparacionesService.update_reparacion(this.reparacionesForm.value, this.get_model('id').value).subscribe(
  //     data => {
  //       MessageBox.success('Se actualizó correctamente');
  //       JQuery.closeModal('ModalForm');
  //       this.getReparaciones();
  //     },
  //     err => {
  //       MessageBox.error(err);
  //     }
  //   )
  // }

}
