import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DateManager} from '../../helpers/DateManager';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-sp-month-picker',
  templateUrl: './sp-month-picker.component.html',
  styleUrls: ['./sp-month-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SpMonthPickerComponent,
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpMonthPickerComponent implements ControlValueAccessor {
  private onChange: (value: Date) => void;
  private onTouch: () => void;
  public date: Date;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(date: Date): void {
    this.date = date;
  }

  monthChanger(next: boolean): void {
    if (!next && DateManager.currentMonthChecker(this.date)) {
      return;
    }
    const adder = next ? 1 : -1;
    console.log(this.date);
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + adder);
    this.onChange(this.date);
    this.onTouch();
  }
}
