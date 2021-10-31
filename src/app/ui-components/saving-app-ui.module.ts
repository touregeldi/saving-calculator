import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpTogglerComponent} from './sp-toggler/sp-toggler.component';
import { SpMonthPickerComponent } from './sp-month-picker/sp-month-picker.component';
import { SpCurrencyInputComponent } from './sp-currency-input/sp-currency-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';



@NgModule({
  declarations: [
    SpTogglerComponent,
    SpMonthPickerComponent,
    SpCurrencyInputComponent
  ],
    exports: [
        SpTogglerComponent,
        SpCurrencyInputComponent,
        SpMonthPickerComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    FormsModule
  ]
})
export class SavingAppUiModule { }
