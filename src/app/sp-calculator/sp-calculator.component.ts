import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

interface Form {
  isTotal: boolean;
  monthly: number;
  total: number;
}

@Component({
  selector: 'app-sp-calculator',
  templateUrl: './sp-calculator.component.html',
  styleUrls: ['./sp-calculator.component.scss']
})
export class SpCalculatorComponent implements OnInit {
  amountForm: FormGroup;
  date: Date = new Date();
  isTotal = false;
  result = '';
  monthNumber = 0;


  constructor(private fb: FormBuilder) {
    this.amountForm = this.fb.group({
      isTotal: false,
      monthly: '0',
      total: '0'
    });
  }

  monthDiff(d1: Date, d2: Date): number {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  calculateResult(form: Form): void {
    if (this.isTotal) {
      const monthly = form.total ? (+form.total / this.monthNumber).toString() : '0';
      this.amountForm.patchValue({
        monthly
      }, { emitEvent: false });
    } else {
      const total = form.monthly ? (this.monthNumber * +form.monthly).toString() : '0';
      this.amountForm.patchValue({
        total
      }, { emitEvent: false });
    }
  }

  ngOnInit(): void {
    this.amountForm.valueChanges.subscribe((form: Form) => {
      this.isTotal = form.isTotal;
      this.monthNumber = this.monthDiff(new Date(), this.date);
      this.calculateResult(form);
    });
  }

  changeDate(isNext: boolean): void {
    if (!isNext && (new Date()).getMonth() === this.date.getMonth()) {
      return;
    }
    const adder = isNext ? 1 : -1;
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + adder);
    this.amountForm.updateValueAndValidity({ onlySelf: false, emitEvent: true });
  }

  getResult(): number {
    return parseInt(this.isTotal ? this.amountForm.get('monthly')?.value : this.amountForm.get('total')?.value, undefined);
  }
}
