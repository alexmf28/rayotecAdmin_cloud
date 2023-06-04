import { Component, OnInit } from '@angular/core';
import { Marca } from '../../interfaces/producto';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageBox } from 'src/app/shared/Helpers/MessageBox';
import { JQuery } from 'src/app/shared/Helpers/JQuery';
import { MarcasService } from '../../services/marcas.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  columns = ['Id', 'Nombre']

  marcas:Array<Marca> = [];

  title = '';
  action = '';

  constructor(
    private fb:FormBuilder,
    private marcasService:MarcasService
  ) { }

  ngOnInit(): void { this.get_marcas(); }

  marcaForm = this.fb.group({
    id:[''],
    nombre:['',Validators.required]
  })

  get_model(model:string):FormControl {
    return this.marcaForm.get(model) as FormControl
  }

  private get_marcas() {
    this.marcasService.get_all_marcas().subscribe(
      data => {
        if(!Array.isArray(data)) { return; }
        this.marcas = data; 
      }
    )
  }

  push(method:string) {
    if(method === 'new') {this.openFormCreate();}
  }

  openFormCreate() {
    this.marcaForm.reset();
    this.title = 'Nueva Marca';
    this.action = 'CREATE';
  }

  openFormUpdate(marca:Marca) {
    this.marcaForm.reset();
    const {id, nombre} = marca;

    this.title = `Marca ${id}`;
    this.action = 'UPDATE';

    this.get_model('id').setValue(id);
    this.get_model('nombre').setValue(nombre);
  }

  takeAction() {
    switch (this.action) {
      case 'CREATE': this.createMarca();
      break;
      case 'UPDATE': this.updateMarca();
      break;
    }
  }

  createMarca() {
    this.marcasService.create_marca(this.marcaForm.value).subscribe(
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

  updateMarca() {
    this.marcasService.update_marca(this.marcaForm.value).subscribe(
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
