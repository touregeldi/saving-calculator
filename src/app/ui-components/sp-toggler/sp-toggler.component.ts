import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-sp-toggler',
  templateUrl: './sp-toggler.component.html',
  styleUrls: ['./sp-toggler.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SpTogglerComponent,
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpTogglerComponent implements ControlValueAccessor {
  private onChange: (value: boolean) => void;
  private onTouch: () => void;
  public toggler: boolean;

  registerOnChange(fn: any): void {
    console.log('onchange', fn);
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    console.log('ontouch', fn);
    this.onTouch = fn;
  }

  writeValue(value: boolean): void {
    console.log('writevlaue', value);
    this.toggler = value;
  }

  setValue(value: boolean): void {
    this.toggler = value;
    this.onChange(this.toggler);
    this.onTouch();
  }
}
