import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ShortenPipe } from '../shorten.pipe';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule   
  ],
  declarations: [
      HomeComponent,
      ShortenPipe
    ]
})
export class HomeModule { }