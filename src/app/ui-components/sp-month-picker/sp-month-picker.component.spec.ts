import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpMonthPickerComponent } from './sp-month-picker.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('SpMonthPickerComponent', () => {
  let component: SpMonthPickerComponent;
  let fixture: ComponentFixture<SpMonthPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ SpMonthPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpMonthPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be', () => {
    component.date = new Date();
    component.registerOnChange(() => {});
    component.registerOnTouched(() => {});
    component.monthChanger(true);
    component.monthChanger(true);
    expect(component.date.getMonth()).toBe(11);
  });
});
