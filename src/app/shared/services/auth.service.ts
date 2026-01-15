import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iregister, IuserLogin } from '../model/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authUrl: string = environment.AUTH_URL;
  constructor(private _http:HttpClient) { }

register(user:Iregister):Observable<any>{
  return this._http.post<any>(`${this.authUrl}/api/auth/register`,user)  
  
}

login(user:IuserLogin):Observable<any>{
  return this._http.post<any>(`${this.authUrl}/api/auth/login`,user)  
 
}

saveToken(token: string){
  localStorage.setItem('token', token);
}


saveUserRole(userRole :string){
localStorage.setItem('userRole',userRole)
}


getToken():string|null{
  return localStorage.getItem('token')
}
getUserRole():any{
  return localStorage.getItem('userRole')
}
 
}
