import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url = `${environment.dominio}/gestionar_productos`;
  headers?:HttpHeaders;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({'Content-Type':'application/json'});
  }

  get_all_productos(): Observable<Array<Producto>> {
    return this.http.get<Array<Producto>>(`${this.url}/listar_productos`, {headers:this.headers});
  }

  get_producto(id:string): Observable<Producto> {
    return this.http.get<Producto>(`${this.url}/obtener_producto/${id}`, {headers:this.headers});
  }

  create_producto(producto:Producto): Observable<any> {
    return this.http.post<any>(`${this.url}/crear_producto`, producto, {headers:this.headers});
  }

  update_producto(producto:Producto, id:string): Observable<any> {
    return this.http.put<any>(`${this.url}/actualizar_producto/${id}`, producto, {headers:this.headers});
  }

  update_image_producto(producto:Producto, id:string): Observable<any> {
    return this.http.put<any>(`${this.url}/actualizar_path/${id}`, producto, {headers:this.headers});
  }
}
