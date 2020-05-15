import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register"
  private _loginUrl = "http://localhost:3000/api/login"

  constructor(private http : HttpClient , private router: Router) { }

  registerUser(user): Observable<any>
  {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user): Observable<any>
  {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  loggedOut()
  {
    localStorage.removeItem('token')
    this.router.navigate(["/events"])
  }
  getTokem()
  {
    return localStorage.getItem('token')
  }
}
