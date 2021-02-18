import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService { 
  connection = false ;
  profile = "";
  url = "http://localhost:9090";
  constructor(private http:HttpClient) { }

  getToken(login:Login){
    return this.http.post(this.url+ "/authenticate",login ,{responseType:'text' as 'json'})
  }
  connect(token:any){
     var tokenBearer = 'Bearer '+token;
     const headers = new HttpHeaders().set('Authorization' ,tokenBearer);
    return this.http.get(this.url , {headers , responseType : 'text' as 'json'});
  }
}
