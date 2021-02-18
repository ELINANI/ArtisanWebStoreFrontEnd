import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Email } from '../models/email';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { SendEmailService } from '../services/send-email.service';
import { RightMessageComponent } from '../right-message/right-message.component';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  email :Email;
  emailToVerify : string;
  verifyCode:any;
  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar,private service :SendEmailService,@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.emailToVerify = this.data.email;
  }
  ngOnInit(): void {
    this.email = new Email(this.emailToVerify);
     this.service.sendEmail(this.email).subscribe(res => {
       console.log('done');
     },err => {
       console.log("error");
     })
  }
verify(){
   if(this.verifyCode == "102030"){
     this.service.verifyEmail = true;
     this._snackBar.openFromComponent(RightMessageComponent, {
      duration: this.durationInSeconds * 500,
    });
   }else{
    this._snackBar.openFromComponent(ErrorMessageComponent, {
      duration: this.durationInSeconds * 500,
    });
   }
}
}
