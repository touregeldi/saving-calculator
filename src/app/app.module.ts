import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpCalculatorComponent } from './sp-calculator/sp-calculator.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IConfig} from 'ngx-mask';
import {SavingAppUiModule} from './ui-components/saving-app-ui.module';

export const options: Partial<IConfig> | (() => Partial<IConfig>) | null = null;

@NgModule({
  declarations: [
    AppComponent,
    SpCalculatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SavingAppUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
