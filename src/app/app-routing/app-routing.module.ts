import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { MoviesHomeComponent } from '../components/movies-home/movies-home.component';
import { AddMoviesComponent } from '../components/add-movies/add-movies.component';

const routes: Routes = [
  {path: '', component: MoviesHomeComponent },
  {path: 'addMovie', component: AddMoviesComponent}
]

@NgModule({
  /*declarations: [],
  imports: [
    CommonModule,
    AppRoutingRoutingModule
  ] */

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
