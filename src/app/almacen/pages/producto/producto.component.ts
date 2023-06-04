import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Storage, deleteObject, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';

import { MarcasService } from '../../services/marcas.service';

import { DescripcionesService } from '../../services/descripciones.service';
import { ModelosService } from '../../services/modelos.service';
import { ProductosService } from '../../services/productos.service';

import { Descripcion, Marca, Modelo } from '../../interfaces/producto';

import { MessageBox } from 'src/app/shared/Helpers/MessageBox';
import { JQuery } from 'src/app/shared/Helpers/JQuery';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  idProducto = '';

  action:string = '';
  localPath:any = null;

  marcas:Array<Marca> = [];
  modelos:Array<Modelo> = [];
  categorias:Array<Descripcion> = [];
  estados_productos:Array<Descripcion> = [];

  constructor(
    private fb:FormBuilder,
    private activatedRouter: ActivatedRoute,
    private router:Router,
    private marcasService:MarcasService,
    private modelosService:ModelosService,
    private descripcionesService:DescripcionesService,
    private productosService:ProductosService,
    private storage:Storage
  ) {
    this.activatedRouter.params.subscribe(
      (params: Params) => { 
        this.idProducto = params?.['idProducto'];
         
        if (this.idProducto) {
          this.action = 'UPDATE';
          this.get_model('cantidad').disable();
          this.getProducto();
          return;
        }
        
        this.action = 'CREATE';
      }
    )
  }

  ngOnInit(): void {
    this.get_marcas();
    this.get_categorias();
    this.get_estados_productos();
    this.get_modelos();
  }

  private getProducto() {
    this.productosService.get_producto(this.idProducto).subscribe(
      data => {
        this.producto_form.setValue(data);
      }
    )
  }

  private get_marcas() {
    this.marcasService.get_all_marcas().subscribe(
      data => {
        if(!Array.isArray(data)) { return; }
        this.marcas = data; 
      }
    )
  }

  private get_categorias() {
    this.descripcionesService.get_all_categorias().subscribe(
      data => {
        if(!Array.isArray(data)) { return; }
        this.categorias = data; 
      }
    )
  }

  private get_estados_productos() {
    this.descripcionesService.get_all_estados_productos().subscribe(
      data => {
        if(!Array.isArray(data)) { return; }
        this.estados_productos = data; 
      }
    )
  }

  private get_modelos() {
    this.modelosService.get_all_modelos().subscribe(
      data => {
        if(!Array.isArray(data)) { return; }
        this.modelos = data; 
      }
    )
  }

  producto_form = this.fb.group({
    id:[''],
    nombre:['', Validators.required],
    descripcion:['', Validators.required],
    garantia:[0, [Validators.required, Validators.min(1)]],
    id_marca:['', Validators.required],
    id_modelo:['', Validators.required],
    id_categoria:['', Validators.required],
    id_estado:['', Validators.required],
    cantidad:[0],
    precio:[0, [Validators.required, Validators.min(0.1)]],
    path:['']
  });

  get_model(model:string):FormControl {
    return this.producto_form.get(model) as FormControl
  }

  take_action() {
    switch(this.action) {
      case 'CREATE': this.createProducto()
      break;
      case 'UPDATE': this.updateProducto()
      break;
    }
  }

  changeFile(event:any) { this.localPath = event.target.files[0]; }

  async createImagePrincipal(id:any) {
    const file = this.localPath;

    const imgRef = ref(this.storage, `principal/${id}`);

    await uploadBytes(imgRef, file)
    .then(async resp => {
      this.get_model('path').setValue( `principal/${id}`);
    })
    .catch(err => console.log(err))
  }
  
  createProducto() {  
    this.productosService.create_producto(this.producto_form.value).subscribe(
      async resp => {
        await this.createImagePrincipal(resp.id);

        this.productosService.update_image_producto(this.producto_form.value, resp.id).subscribe(
          data => {
            console.log(data);
            MessageBox.success('Se creó correctamente');
            this.router.navigate(['/productos']);
          }, 
          err => {
            MessageBox.error(err);
          }
        )
      },
      err => {
        MessageBox.error(err);
      }
    )
  }

  async updateProducto() {
    
    if(this.localPath != null) { await this.createImagePrincipal(this.idProducto); }

    this.productosService.update_producto(this.producto_form.value, this.idProducto).subscribe(
      resp => {
        MessageBox.success('Se actualizó correctamente');
        this.router.navigate(['/productos']);    
      },
      err => {
        console.log(err);
      }
    )
  }

}
