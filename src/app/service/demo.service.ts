import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Demo } from '../models/demo/demo.model';

const baseUrl = 'http://192.168.137.1:8080/api/demos';

@Injectable({
  providedIn: 'root'
})

export class DemoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Demo[]> {
    return this.http.get<Demo[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Demo[]> {
    return this.http.get<Demo[]>(`${baseUrl}?title=${title}`);
  }
}
