import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url = "http://localhost:9090/article";
products : any;
  constructor(private http:HttpClient) { }

getAllProduct(){
   this.http.get(this.url , {responseType : 'text' as 'json'}).toPromise().then(res =>{
     this.products = JSON.parse(res as string) ;
     console.log(this.products);
   })
}
}
