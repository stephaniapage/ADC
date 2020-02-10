import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Salon } from './salon';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private uri = "http://127.0.0.1:8000/salon";

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(this.uri);
  }

  get(id: number){
    return this.http.get(`${this.uri}/${id}`);
  }

  create(salon: Salon){
    return this.http.post(this.uri, salon);
  }

  edit(id: number, salon:Salon){
    return this.http.put(`${this.uri}/${id}`, salon);
  }

  delete(id:number){
    return this.http.delete(`${this.uri}/${id}`);
  }
}
