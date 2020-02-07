import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private uri = "http://127.0.0.1:8000/prospect";

  constructor(private http: HttpClient) { }

  create(prospect: Contact){
    return this.http.post(this.uri, prospect);
  }
}
