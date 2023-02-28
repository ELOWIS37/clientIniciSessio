import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly serverUrl = 'http://localhost:3000/auth';
  constructor(private readonly http: HttpClient) { }
  register(email: string, password: string): Observable<any> {
    const data = { email, password };
    return this.http.post(`${this.serverUrl}/register`, data);
  }

  login(email: string, password: string): Observable<any> {
    const data = { email, password };
    return this.http.post(`${this.serverUrl}/login`, data);
  }
}
