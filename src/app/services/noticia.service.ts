import { Noticia } from './../models/noticia';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http : HttpClient) { }
  
  _miUrl: string = 'http://localhost:9000/api/v1/noticia/';

  findAll() : Observable <Noticia[]> {
      return this.http.get<Noticia[]> (this._miUrl);
  }

  findById() : Observable <Noticia> {
    return this.http.get<Noticia> (this._miUrl);
  }

  save(empresa : Noticia) : Observable <Noticia>{
    return this.http.post<Noticia> (this._miUrl, empresa);
  }

  update(id : number, empresa : Noticia) : Observable<Noticia> {
    return this.http.put<Noticia> (this._miUrl + id, empresa);
  }

  delete (id : number) : Observable<any> {
    return this.http.delete (this._miUrl + id);
  }
}