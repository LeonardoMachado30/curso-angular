import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { InputComponent } from './input/input.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';

@NgModule({
  declarations: [AppComponent, InputComponent, StyleBindingComponent],
  imports: [BrowserModule, AppRoutingModule, CardsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
