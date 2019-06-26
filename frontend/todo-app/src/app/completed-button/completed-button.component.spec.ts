import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedButtonComponent } from './completed-button.component';

describe('CompletedButtonComponent', () => {
  let component: CompletedButtonComponent;
  let fixture: ComponentFixture<CompletedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
