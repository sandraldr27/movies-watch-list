import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { AddMoviesComponent } from './components/add-movies/add-movies.component';
import { MoviesHomeComponent } from './components/movies-home/movies-home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    MoviesHomeComponent,
    AddMoviesComponent,
    ButtonComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
