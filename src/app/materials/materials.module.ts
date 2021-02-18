import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';

const materials = [
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatStepperModule,
  MatSnackBarModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatCardModule
]
@NgModule({
 
  imports: [ materials],
  exports :[materials]
})
export class MaterialsModule { }
