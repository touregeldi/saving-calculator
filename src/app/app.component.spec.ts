import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SpCalculatorComponent} from './sp-calculator/sp-calculator.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxMaskModule} from 'ngx-mask';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgxMaskModule.forRoot()
      ],
      declarations: [
        AppComponent,
        SpCalculatorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'saving-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('saving-app');
  });
});
