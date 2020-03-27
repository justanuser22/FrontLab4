import { Empresa } from './../models/empresa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http : HttpClient) { }

  _miUrl: string = 'http://localhost:9000/api/v1/empresa/';

  findAll() : Observable <Empresa[]> {
      return this.http.get<Empresa[]> (this._miUrl);
  }

  findById() : Observable <Empresa> {
    return this.http.get<Empresa> (this._miUrl);
  }

  save(empresa : Empresa) : Observable <Empresa>{
    return this.http.post<Empresa> (this._miUrl, empresa);
  }

  update(id : number, empresa : Empresa) : Observable<Empresa> {
    return this.http.put<Empresa> (this._miUrl + id, empresa);
  }

  delete (id : number) : Observable<any> {
    return this.http.delete (this._miUrl + id);
  }
}
