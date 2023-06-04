import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Modelo } from '../interfaces/producto';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  url = `${environment.dominio}/gestionar_productos`;
  headers?:HttpHeaders;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({'Content-Type':'application/json'});
  }

  get_all_modelos(): Observable<Array<Modelo>> {
    return this.http.get<Array<Modelo>>(`${this.url}/listar_modelos`, {headers:this.headers});
  }

  create_modelo(modelo:Modelo): Observable<any> {
    return this.http.post<any>(`${this.url}/crear_modelo`, modelo, {headers:this.headers});
  }

  update_modelo(modelo:Modelo): Observable<any> {
    return this.http.put<any>(`${this.url}/actualizar_modelo/${modelo.id}`, modelo, {headers:this.headers});
  }
}
