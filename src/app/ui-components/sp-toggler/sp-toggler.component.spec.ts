import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpTogglerComponent } from './sp-toggler.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('SpTogglerComponent', () => {
  let component: SpTogglerComponent;
  let fixture: ComponentFixture<SpTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ SpTogglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
