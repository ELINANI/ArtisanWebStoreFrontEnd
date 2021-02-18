import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LocalStorageService } from 'ng2-webstorage';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {

  constructor(public loginService:LoginService,private dialog: MatDialog ) { }

  ngOnInit(): void {
  }
  login(){
    const dialogRef = this.dialog.open(LoginRegisterComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

