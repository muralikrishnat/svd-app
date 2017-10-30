import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressNewEditComponent } from './address-new-edit.component';

describe('AddressNewEditComponent', () => {
  let component: AddressNewEditComponent;
  let fixture: ComponentFixture<AddressNewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressNewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
