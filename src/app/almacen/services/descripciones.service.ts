import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Descripcion } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class DescripcionesService {

  url = `${environment.dominio}/descripciones`;
  headers?:HttpHeaders;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({'Content-Type':'application/json'});
  }

  get_all_categorias(): Observable<Array<Descripcion>> {
    return this.http.get<Array<Descripcion>>(`${this.url}/listar_categorias`, {headers:this.headers});
  }

  get_all_estados(): Observable<Array<Descripcion>> {
    return this.http.get<Array<Descripcion>>(`${this.url}/listar_estados_productos`, {headers:this.headers});
  }

  get_all_estados_productos(): Observable<Array<Descripcion>> {
    return this.http.get<Array<Descripcion>>(`${this.url}/listar_estados_producto`, {headers:this.headers});
  }
}
