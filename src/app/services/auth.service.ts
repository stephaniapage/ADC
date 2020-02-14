import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected uri: string = "http://localhost:8000/api/login_check";

  private headers: HttpHeaders;
  private token: string = null;

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

  public auth(username: string, password: string) {
    let body = {
      username: username,
      password: password
    }
    return this.http.post(this.uri, body, {headers: this.headers});
  }

  public logout() {
    //en cas de déconnexion, on supprime le jwt du local storage
    localStorage.removeItem('jwt');
  }
}
