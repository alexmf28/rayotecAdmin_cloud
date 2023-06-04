import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { MarcasService } from '../../services/marcas.service';

import { Marca } from '../../interfaces/producto';

import { MessageBox } from 'src/app/shared/Helpers/MessageBox';
import { JQuery } from 'src/app/shared/Helpers/JQuery';
import { ModelosService } from '../../services/modelos.service';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent implements OnInit {

  columns = ['Id', 'Nombre']

  modelos:Array<Marca> = [];

  title = '';
  action = '';

  constructor(
    private fb:FormBuilder,
    private modelosService:ModelosService
  ) { }

  ngOnInit(): void { this.get_marcas(); }

  modeloForm = this.fb.group({
    id:[''],
    nombre:['',Validators.required]
  })

  get_model(model:string):FormControl {
    return this.modeloForm.get(model) as FormControl
  }

  private get_marcas() {
    this.modelosService.get_all_modelos().subscribe(
      data => {
        if(!Array.isArray(data)) { return; }
        this.modelos = data; 
      }
    )
  }

  push(method:string) {
    if(method === 'new') {this.openFormCreate();}
  }

  openFormCreate() {
    this.modeloForm.reset();
    this.title = 'Nuevo Modelo';
    this.action = 'CREATE';
  }

  openFormUpdate(marca:Marca) {
    this.modeloForm.reset();

    const {id, nombre} = marca;

    this.action = 'UPDATE';
    this.title = `Modelo ${id}`;

    this.get_model('id').setValue(id);
    this.get_model('nombre').setValue(nombre);
  }

  takeAction() {
    switch (this.action) {
      case 'CREATE': this.createModelo();
      break;
      case 'UPDATE': this.updateModelo();
      break;
    }
  }

  createModelo() {
    this.modelosService.create_modelo(this.modeloForm.value).subscribe(
      resp => {
        this.get_marcas();
        MessageBox.success('Se creó correctamente');
        JQuery.closeModal('ModalForm');
      },
      err => {
        MessageBox.error(err);
        JQuery.closeModal('ModalForm');
      } 
    );
  }

  updateModelo() {
    this.modelosService.update_modelo(this.modeloForm.value).subscribe(
      resp => {
        this.get_marcas();
        MessageBox.success('Se actualizó correctamente');
        JQuery.closeModal('ModalForm');
      },
      err => {
        MessageBox.error(err);
        JQuery.closeModal('ModalForm');
      } 
    );  
  }

}
