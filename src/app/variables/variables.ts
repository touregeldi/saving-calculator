import {CurrencyPipe, DatePipe} from '@angular/common';
import {DateManager} from '../helpers/DateManager';
const currencyPipe: CurrencyPipe = new CurrencyPipe('EN');
const datePipe: DatePipe = new DatePipe('EN');


export const CALCULATOR_TEXTS = {
  totalAmount: 'Total amount',
  montlyAmount: 'Monthly amount',
  saveUntil: 'Save until',
  reachGoal: 'Reach goal by'
};

export const DESCRIPTION = {
  default: 'You should enter value to calculate amount',
  getMonthly(date: Date, input: string): string {
    return `You are planning ${
      DateManager.monthDifferenceCalculater((new Date()), date) + 1
    } monthly deposits to reach your ${
      currencyPipe.transform(+input, 'USD', 'symbol-narrow', '.0')
    } goal by ${
      datePipe.transform(date, 'MMMM y')
    }.`;
  },
  getTotal(date: Date, input: string, amount: number): string {
    return `You are saving ${
      currencyPipe.transform(+input, 'USD', 'symbol-narrow', '.0')
    } monthly to save ${
      currencyPipe.transform(amount, 'USD', 'symbol-narrow', '.0')
    } by ${
      datePipe.transform(date, 'MMMM y')
    }.`;
  }
};

export const maxValue = 999999999;


