import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Marca } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  url = `${environment.dominio}/gestionar_productos`;
  headers?:HttpHeaders;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({'Content-Type':'application/json'});
  }

  get_all_marcas(): Observable<Array<Marca>> {
    return this.http.get<Array<Marca>>(`${this.url}/listar_marcas`, {headers:this.headers});
  }

  create_marca(marca:Marca): Observable<any> {
    return this.http.post<any>(`${this.url}/crear_marca`, marca, {headers:this.headers});
  }

  update_marca(marca:Marca): Observable<any> {
    return this.http.put<any>(`${this.url}/actualizar_marca/${marca.id}`, marca, {headers:this.headers});
  }
}
