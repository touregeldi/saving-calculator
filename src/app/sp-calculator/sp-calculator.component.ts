import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {DateManager} from '../helpers/DateManager';
import {CALCULATOR_TEXTS, DESCRIPTION, maxValue} from '../variables/variables';
import {CurrencyPipe} from '@angular/common';

interface AmountForm {
  toggler: false;
  input: '0';
  date: Date;
}

@Component({
  selector: 'app-sp-calculator',
  templateUrl: './sp-calculator.component.html',
  styleUrls: ['./sp-calculator.component.scss']
})
export class SpCalculatorComponent implements OnInit, OnDestroy {
  public form: FormGroup = this.fb.group({
    toggler: false,
    input: ['0', Validators.maxLength(10)],
    date: new Date()
  });
  private destroy: Subject<void> = new Subject<void>();

  public amount = 0;
  public description = DESCRIPTION.default;
  public CALCULATOR_TEXTS = CALCULATOR_TEXTS;
  public amountForDisplay: string = '$0';

  constructor(private fb: FormBuilder,
              private currencyPipe: CurrencyPipe) {}

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      takeUntil(this.destroy)
    ).subscribe((form: AmountForm) => {
      console.log(form);
      this.amount = this.calculateAmount(form.toggler, form.date, form.input);
      this.amountForDisplay = this.currencyPipe.transform(this.amount, 'USD', 'symbol-narrow', '.0') || '0';
      if (this.amountForDisplay.length > maxValue) {
        this.amountForDisplay = '$' + this.amount.toExponential(2);
      }
      this.description = this.getDescription(form.toggler, form.date, form.input, this.amount);
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  calculateAmount(monthly: boolean, date: Date, input: string): number {
    const monthNumber = DateManager.monthDifferenceCalculater((new Date()), date) + 1;
    if (monthly) {
      return (+input) / monthNumber;
    } else {
      return monthNumber * (+input);
    }
  }

  getDescription(toggler: boolean, date: Date, input: string, amount: number): string {
    if ((+input) === 0) {
      return DESCRIPTION.default;
    } else if (toggler){
      return DESCRIPTION.getMonthly(date, input);
    } else {
      return DESCRIPTION.getTotal(date, input, amount);
    }
  }
}
