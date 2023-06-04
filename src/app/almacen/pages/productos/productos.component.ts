import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Producto } from '../../interfaces/producto';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  columns = ['Id', 'Nombre', 'Garantia'];

  productos:Array<Producto> = [];

  constructor(private productoService:ProductosService) { }

  ngOnInit(): void {this.getProductos();}
  
  private getProductos() {
    this.productoService.get_all_productos().subscribe(
      data => {
        if(!Array.isArray(data)) {return;}
        this.productos = data;
      }
    )
  }
}
