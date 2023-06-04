import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Proveedor } from '../interfaces/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  private url = `${environment.dominio}/gestionar_proveedor`;
  private headers?:HttpHeaders;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({'Content-Type':'application/json'});
  }

  get_proveedores():Observable<Array<Proveedor>> {
    return this.http.get<Array<Proveedor>>(`${this.url}/proveedores`, {headers:this.headers});
  }

  create_proveedor(proveedor:Proveedor):Observable<any> {
    return this.http.post(`${this.url}/proveedor`, proveedor, {headers:this.headers})
  }

  update_proveedor(proveedor:Proveedor, idProveedor:string):Observable<any> {
    return this.http.put(`${this.url}/proveedores/${idProveedor}`, proveedor, {headers:this.headers})
  }
}
