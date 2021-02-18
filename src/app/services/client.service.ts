import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url = "http://localhost:9090/registerClient";
  constructor(private http:HttpClient) { }

registerClient(formData :FormData){
   return this.http.post(this.url,formData,{responseType:'text' as 'json'})
}
}
