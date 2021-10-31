import {Component} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MaskManager} from '../../helpers/MaskManager';

@Component({
  selector: 'app-sp-currency-input',
  templateUrl: './sp-currency-input.component.html',
  styleUrls: ['./sp-currency-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SpCurrencyInputComponent,
      multi: true
    }
  ]
})
export class SpCurrencyInputComponent implements ControlValueAccessor {
  public onChange: (value: string) => void;
  private onTouch: () => void;
  public input: string;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  writeValue(input: string): void {
    this.input = MaskManager.stringMaskToNormal(input);
  }

  setValue($event: Event): void {
    const input = ($event.target as any).value;
    this.onChange(MaskManager.stringMaskToNormal(input));
  }
}

