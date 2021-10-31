import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpCalculatorComponent } from './sp-calculator.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SavingAppUiModule} from '../ui-components/saving-app-ui.module';

describe('SpCalculatorComponent', () => {
  let component: SpCalculatorComponent;
  let fixture: ComponentFixture<SpCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        SavingAppUiModule
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


  it('should be 100', () => {
    expect(component.calculateAmount(true, new Date(2022, 5), '900')).toBe(100);
  });

  it('should be 900', () => {
    expect(component.calculateAmount(false, new Date(2022, 5), '100')).toBe(900);
  });
});
