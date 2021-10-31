import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpCurrencyInputComponent } from './sp-currency-input.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('SpCurrencyInputComponent', () => {
  let component: SpCurrencyInputComponent;
  let fixture: ComponentFixture<SpCurrencyInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ SpCurrencyInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpCurrencyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
