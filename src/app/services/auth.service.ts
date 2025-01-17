import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://musichub-backend-2e5p.onrender.com/login';
  private signUpUrl = 'https://musichub-backend-2e5p.onrender.com/sign-up'

  constructor(private http:HttpClient ) { }

  login(loginData:{username:string,password:string}):Observable<any>{
    return this.http.post<any>(this.loginUrl,loginData);
  }

  register(registerData:{email:string,username:string,password:string}):Observable<any>{
    return this.http.post<any>(this.signUpUrl, registerData);
  }
}
