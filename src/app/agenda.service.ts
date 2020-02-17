import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Salon } from './salon';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private uri = "https://127.0.0.1:8000/api/salon";
  private headers;

  constructor(private http: HttpClient, private authService: AuthService) { 
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

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
