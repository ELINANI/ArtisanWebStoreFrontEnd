import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2Webstorage} from 'ng2-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MaterialsModule } from './materials/materials.module';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { RightMessageComponent } from './right-message/right-message.component';
import { ProductsComponent } from './products/products.component';
import { CommandeComponent } from './commande/commande.component'

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    HomeComponent,
    ErrorPageComponent,
    LoginRegisterComponent,
    VerifyEmailComponent,
    ErrorMessageComponent,
    RightMessageComponent,
    ProductsComponent,
    CommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    Ng2Webstorage,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
