import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeHasPassed } from './pipes/time-has-passed.pipe';
import { Numeral } from './pipes/numeral.pipe';
import { IbanParser } from './pipes/iban-parser.pipe';
import { MaterialDesignModule } from '../modules/material.module';


@NgModule({
  declarations: [
    AppComponent,
    TimeHasPassed,
    Numeral,
    IbanParser
  ],
  imports: [
    BrowserModule,
    MaterialDesignModule
  ],
  providers: [TimeHasPassed, Numeral, IbanParser],
  bootstrap: [AppComponent]
})
export class AppModule { }
