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
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value: boolean): void {
    this.toggler = value;
  }

  setValue(): void {
    this.toggler = !this.toggler;
    this.onChange(this.toggler);
    this.onTouch();
  }
}
