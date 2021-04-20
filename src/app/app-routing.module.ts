import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';

const routes: Routes = [
  { path: 'register', component: BasicFormComponent },
  { path: 'login', component: SubmitFormComponent },
  { path: 'board', component: MainBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
