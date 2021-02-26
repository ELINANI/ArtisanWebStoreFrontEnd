import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Email } from '../models/email';
import { SendEmailService } from '../services/send-email.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
  item: any;
  email: Email;
  userConnect: any;
  constructor(private sendEmail: SendEmailService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.item = data;
    console.log(this.item.item.prixArticle);
  }
  ngOnInit(): void {
    console.log(this.item);
  }
  validation() {
    alert("verifié votre boite mail");
    this.userConnect = localStorage.getItem('userConnectData');
    this.userConnect = JSON.parse(this.userConnect);
    this.email = new Email(this.userConnect.emailPersonne)
    console.log(this.email);
    this.sendEmail.sendEmailToCamd(this.email).subscribe(res => {
      console.log(res);
    })
  }
}

