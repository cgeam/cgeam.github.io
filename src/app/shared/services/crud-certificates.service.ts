import { environment } from './../../../environments/environment';
import { Certificate } from './../models/certificate.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type TYPE = Certificate;

@Injectable({
  providedIn: 'root'
})
export class CrudCertificatesService {

  constructor(
    private http: HttpClient
  ) { }

  get(id: string) {
    return this.http.get<TYPE>(`${environment.url}/certificates/${id}`);
  }
}
