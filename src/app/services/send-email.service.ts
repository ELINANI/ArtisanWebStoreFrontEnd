import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../models/email';
@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  verifyEmail:boolean = false ;
  url = "http://localhost:9090/sendMailToVerify";
  urlCMD = "http://localhost:9090/CommandeVerify";

  constructor(private http:HttpClient) { }

  sendEmail(email:Email){
    return this.http.post(this.url,email ,{responseType : 'text' as 'json'});
  }
  sendEmailToCamd(email:Email){
    return this.http.post(this.urlCMD,email ,{responseType : 'text' as 'json'});
  }
}
