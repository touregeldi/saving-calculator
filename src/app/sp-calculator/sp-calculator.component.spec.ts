import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpCalculatorComponent } from './sp-calculator.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('SpCalculatorComponent', () => {
  let component: SpCalculatorComponent;
  let fixture: ComponentFixture<SpCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ SpCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should next month', () => {
    component.changeDate(true);
    expect(component.date.getMonth()).toEqual((new Date()).getMonth() + 1);
  });

  it('should this month', () => {
    component.changeDate(false);
    expect(component.date.getMonth()).toEqual((new Date()).getMonth());
  });

  it('should previous month', () => {
    component.changeDate(true);
    component.changeDate(true);
    component.changeDate(true);
    component.changeDate(false);
    expect(component.date.getMonth()).toEqual((new Date()).getMonth() + 3 - 1);
  });

  it('should be calculated', () => {
    component.changeDate(true);
    component.changeDate(true);
    component.changeDate(true);
    component.amountForm.patchValue({
      monthly: '300'
    }, {emitEvent: true});
    expect(component.amountForm.get('total')?.value).toEqual('900');
  });
});
