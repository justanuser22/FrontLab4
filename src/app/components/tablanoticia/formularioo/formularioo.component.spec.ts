import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariooComponent } from './formularioo.component';

describe('FormulariooComponent', () => {
  let component: FormulariooComponent;
  let fixture: ComponentFixture<FormulariooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
