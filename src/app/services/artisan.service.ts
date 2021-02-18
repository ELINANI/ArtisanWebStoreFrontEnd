import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {
  url = "http://localhost:9090/registerArtisan";
  constructor(private http : HttpClient) { }
  registerArtisan(formData :FormData){
    return this.http.post(this.url,formData,{responseType:'text' as 'json'})
 }
}
