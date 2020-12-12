
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Comment } from '../models/comment.model';

const baseUrl = 'http://192.168.137.1:8080/api/comments';

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  findByAcccode(acccode: any): Observable<Comment[]> {
    if(acccode){
      return this.http.get<Comment[]>(`${baseUrl}/${acccode}`);
    }else{
      return this.http.get<Comment[]>(baseUrl);
    }
  }
}
