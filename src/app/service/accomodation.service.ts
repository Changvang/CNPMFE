
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Accomodation } from '../models/accomodation.model';

const baseUrl = 'http://192.168.137.1:8080/api/accommodations';

@Injectable({
  providedIn: 'root'
})

export class AccomodationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Accomodation[]> {
    return this.http.get<Accomodation[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  findByAddress(address: any): Observable<Accomodation[]> {
    if(address){
      return this.http.get<Accomodation[]>(`${baseUrl}/address/${address}`);
    }else{
      return this.http.get<Accomodation[]>(baseUrl);
    }
  }
}
