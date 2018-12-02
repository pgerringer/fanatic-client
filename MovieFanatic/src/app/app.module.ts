import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { Http } from '@angular/http';
//import { Tabulator } from 'tabulator-tables/dist/js/tabulator.min.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieViewComponent } from './components/movie-view/movie-view.component';
import { HeaderComponent } from './components/header/header.component';
import { ActorViewComponent } from 'src/app/components/actor-view/actor-view.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieViewComponent,
    HeaderComponent,
    ActorViewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  //  Tabulator
  ],
  providers: [ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
