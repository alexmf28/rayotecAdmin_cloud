import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Venta } from '../../interfaces/venta';
import { VentasService } from '../../services/ventas.service';
import { MessageBox } from 'src/app/shared/Helpers/MessageBox';
import { JQuery } from 'src/app/shared/Helpers/JQuery';

@Component({
  selector: 'app-registrar-ventas',
  templateUrl: './registrar-ventas.component.html',
  styleUrls: ['./registrar-ventas.component.css']
})
export class RegistrarVentasComponent implements OnInit {

  columns = ['Numero de venta', 'Técnico', 'Teléfono', 'Nombre Cliente', 'Fecha Entrada', 'Fecha Salida', 'Descripción', 'Estado'];

  title:string = '';
  action:string = '';

  ventas:Array<Venta> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
