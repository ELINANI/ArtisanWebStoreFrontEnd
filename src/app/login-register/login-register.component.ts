import { Component, OnInit } from '@angular/core';
import {FormGroup,FormArray ,FormBuilder, Validators} from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';
import { VerifyEmailComponent } from 'src/app/verify-email/verify-email.component';
import { Artisan } from '../models/artisan';
import { Boutique } from '../models/boutique';
import { Client } from '../models/client';
import { Commande } from '../models/commande';
import { Login } from '../models/login';
import { Role } from '../models/role';
import { Validation } from '../models/validation';
import { ArtisanService } from '../services/artisan.service';
import { ClientService } from '../services/client.service';
import { LoginService } from '../services/login.service';
import { SendEmailService } from '../services/send-email.service';
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  formGroup :FormGroup;
  registerStepOne:FormGroup;
  registerStepTwo :FormGroup;
  registerStepTree:FormGroup;
  hide = true;
  client:Client;
  artisan :Artisan;
  role :Role;
  cmd : Commande[];
  btq:Boutique[];
  vld:Validation[];
  email:any;
  file:File;
  artisanORClient:string;
  compte:Login;
  image:any = "./assets/images/profile.png";
  constructor(private localStorageService:LocalStorageService,private router :Router,public loginService:LoginService,public artisanService:ArtisanService,public serviceClient:ClientService,public service:SendEmailService,private formBuilder :FormBuilder,private dialog: MatDialog ) { }
    
  ngOnInit(): void {
   this.formGroup = this.formBuilder.group({
      email : ['' ,[
         Validators.required ,
         Validators.email
      ]],
      pwd : ['' ,[
        Validators.required ,
        Validators.minLength(8)
      ]]
   })

    this.registerStepOne = this.formBuilder.group({
        nom : ['' ,[
           Validators.required
        ]],
        prenom : ['' , [Validators.required]],
        cin : ['' , [Validators.required]]
    });
    this.registerStepTwo = this.formBuilder.group({
      email : ['' , [
         Validators.email,
         Validators.required
      ]]
    });
    this.registerStepTree = this.formBuilder.group({
     pwd : ['' , [
        Validators.required,
        Validators.minLength(8)
     ]]
    });
    this.client = {
      codePersonne : 0,
      nomPersonne:'',
      presnomPersonne:'',
      cinPersonne:'' ,
      emailPersonne:'',
      pwdPersonne:'',
      photoProfile:'',
      list:this.role,
      commandeList:this.cmd,
    };
    this.compte = {
      email :'' ,
      pwd :''
    }   
  }
  login(){
        this.loginService.getToken(this.compte).subscribe(res=> {
          console.log(res);
           this.connect(res);
        } ,err => {
           console.log('error in login method');
        })
  }
   connect(token:any){
       this.loginService.connect(token).subscribe(res => {
          this.localStorageService.store('userConnectData' , res);
          localStorage.setItem('userConnectData',res as string);
           console.log(this.localStorageService.retrieve('userConnectData'));
           this.loginService.connection = true;
            let obj  = JSON.parse(this.localStorageService.retrieve('userConnectData'));
            
           this.loginService.profile ="data:image/jpeg;base64,"+obj.photoProfile
       },err=>{
         console.log('error in connect method');
       })
   }
  regiser(){
    let formData = new FormData();
    if(this.artisanORClient == "Client"){
      formData.append('photoProfile',this.file);
    var client = JSON.stringify(this.client);
    formData.append('client',client);
     this.serviceClient.registerClient(formData).subscribe(res=>{
       console.log('added');
       this.router.navigate(['/home'])
     },err =>{
       console.log('error');
     })
    }else if(this.artisanORClient == "Artisan"){
      this.artisan = {
        codePersonne : 0,
        nomPersonne:this.client.nomPersonne,
        presnomPersonne:this.client.presnomPersonne,
        cinPersonne:this.client.cinPersonne ,
        emailPersonne:this.client.emailPersonne,
        pwdPersonne:this.client.pwdPersonne,
        photoProfile:'',
        list :this.client.list,
        boutiqueList:this.btq,
        validationList:this.vld
      }
      formData.append('photoProfile',this.file);
      var artisan = JSON.stringify(this.artisan);
      formData.append('artisan',artisan);
      this.artisanService.registerArtisan(formData).subscribe(res=>{
        console.log('added');
        this.router.navigate(['/home']);
        console.log("navigated");
      },err =>{
        console.log('error');
      })
    }
    
  }
  verify(): void{
    this.dialog.open(VerifyEmailComponent ,{
      data : {
        'email' : this.client.emailPersonne
      }
    });
   
  }
  loadImage(event :any){
    this.file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.file);
    fileReader.onload = () => {
      this.image = fileReader.result;
    }
  }
  
}
