import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';

const routes: Routes = [
  { path: 'register', component: BasicFormComponent },
  { path: 'login', component: SubmitFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
