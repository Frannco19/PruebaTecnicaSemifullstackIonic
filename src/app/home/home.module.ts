import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { PokemonCardComponent } from 'src/app/component/pokemon-card/pokemon-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from '../app.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    BrowserModule,
    AppModule
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
