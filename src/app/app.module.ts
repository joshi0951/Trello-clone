import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArrayFormComponent } from './array-form/array-form.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { ValidFormComponent } from './valid-form/valid-form.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { UserServiceService } from './user-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ArrayFormComponent,
    BasicFormComponent,
    NestedFormComponent,
    SubmitFormComponent,
    ValidFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
