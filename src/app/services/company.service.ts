import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Company } from '../models/company';
import { map } from 'rxjs/operators';
import { OtherService } from './other.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient, private other: OtherService) {}

   // VAMOS A MOSTRAR LA LISTA DE COMPAÑIAS
   public getListaCias(): Observable<Company[]> {
    return this.http.get<Company[]>(this.other.getUrl() + '/company/list').pipe(
      map( rest => rest as Company[])
    );
  }
  // METODO QUE NOS TRAE UNA COMPAÑIA
  public getCompany(usuario: Usuario): Observable<Company> {
    return this.http.get<Company>(this.other.getUrl() + `/company/${usuario.cia}`).pipe(
      map( rest => rest as Company)
    );
  }


}

