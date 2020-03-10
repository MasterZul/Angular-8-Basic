import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; // Add this
import { ListComponent } from './list/list.component'; // Add this

const routes: Routes = [
  { path: '', component: HomeComponent },              // Add this
  { path: 'list', component: ListComponent }           // Add this
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]],
  exports: [RouterModule]
})
export class AppRoutingModule { }
