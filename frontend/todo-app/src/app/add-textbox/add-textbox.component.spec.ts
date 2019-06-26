import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTextboxComponent } from './add-textbox.component';

describe('AddTextboxComponent', () => {
  let component: AddTextboxComponent;
  let fixture: ComponentFixture<AddTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
