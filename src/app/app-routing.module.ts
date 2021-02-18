import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 {
   path : "",
   redirectTo :'home',
   pathMatch :'full'
 },
  {
   path :"home",
   component : HomeComponent,
   pathMatch :'full'
 },
 { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
 {
   path :"**",
   component:ErrorPageComponent,
   pathMatch :'full'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
