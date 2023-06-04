import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Proveedor } from '../../interfaces/proveedor';
import { ProveedoresService } from '../../services/proveedores.service';
import { MessageBox } from 'src/app/shared/Helpers/MessageBox';
import { JQuery } from 'src/app/shared/Helpers/JQuery';

@Component({
  selector: 'app-ver-proveedores',
  templateUrl: './ver-proveedores.component.html',
  styleUrls: ['./ver-proveedores.component.css']
})
export class VerProveedoresComponent implements OnInit {

  columns = ['id', 'Nombres y Apellidos', 'Teléfono', 'Correo Electronico', 'Estado'];

  proveedores:Array<Proveedor> = [];

  title:string = '';
  action:string = '';

  constructor(
    private fb:FormBuilder,
    private proveedoresService:ProveedoresService
  ) { }

  ngOnInit(): void { this.getProveedores() }

  private getProveedores() {
    this.proveedoresService.get_proveedores().subscribe(
      data => {
        if(!Array.isArray(data)) { this.proveedores = []; return;}
        this.proveedores = data;
      }
    )
  }

  proveedorForm = this.fb.group({
    id:['', [Validators.required, Validators.maxLength(11), ]],
    nombre:[''],
    nro_doc:[''],
    contacto:[''],
    telefono:['', [Validators.required, Validators.minLength(6), Validators.maxLength(9), Validators.min(100000)]],
    email:['', [Validators.required, Validators.email]],
    estado:[false]
  })

  get_model(model:string): FormControl {
    return this.proveedorForm.get(model) as FormControl
  }

  push(method:string) {
    if(method == 'new') { this.openFormCreate(); }
  }

  openFormCreate() {
    this.proveedorForm.reset();

    this.get_model('id').enable();

    this.title = 'Nueva Proveedor';
    this.action = 'CREATE';
  }

  openFormUpdate(proveedor:Proveedor) {
    this.proveedorForm.reset();

    this.get_model('id').disable();
    this.get_model('contacto').disable();
    this.get_model('nombre').disable();

    this.proveedorForm.setValue(proveedor);

    this.title = `Proveedor ${proveedor.id}`;
    this.action = 'UPDATE';
  }

  takeAction() {
    switch(this.action) {
      case 'CREATE': this.createProveedor();
        break;
      case 'UPDATE': this.updateProveedor();
        break;
    }
  }

  async createProveedor() {

    await this.get_model('id').setValue(parseInt(this.get_model('id').value))
    await this.get_model('nombre').setValue('')
    await this.get_model('contacto').setValue('')
    await this.get_model('telefono').setValue(parseInt(this.get_model('telefono').value))
    await this.get_model('nro_doc').setValue(parseInt(this.get_model('nro_doc').value))
    await this.get_model('estado').setValue('true')

    console.log(this.proveedorForm.value)

    this.proveedoresService.create_proveedor(this.proveedorForm.value).subscribe(
      data => {
        MessageBox.success('Se creó correctamente');
        JQuery.closeModal('ModalForm');
        this.getProveedores();
      },
      err => {
        MessageBox.error(err);
      }
    )
  }

  async updateProveedor() {

    this.get_model('id').enable()
    this.get_model('contacto').enable()
    this.get_model('nombre').enable()

    await this.get_model('nombre').setValue('')
    await this.get_model('contacto').setValue('')
    await this.get_model('telefono').setValue(parseInt(this.get_model('telefono').value))
    await this.get_model('nro_doc').setValue(parseInt(this.get_model('nro_doc').value))


    console.log(this.proveedorForm.value)

    this.proveedoresService.update_proveedor(this.proveedorForm.value, this.get_model('id').value).subscribe(
      data => {
        MessageBox.success('Se actualizó correctamente');
        JQuery.closeModal('ModalForm');
        this.getProveedores();
      },
      err => {
        MessageBox.error(err);
      }
    )
  }

}
