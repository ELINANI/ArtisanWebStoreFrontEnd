import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../models/email';
@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  verifyEmail:boolean = false ;
  url = "http://localhost:9090/sendMailToVerify";
  constructor(private http:HttpClient) { }

  sendEmail(email:Email){
    return this.http.post(this.url,email ,{responseType : 'text' as 'json'});
  }
}
