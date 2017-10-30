import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerNewEditComponent } from './manufacturer-new-edit.component';

describe('ManufacturerNewEditComponent', () => {
  let component: ManufacturerNewEditComponent;
  let fixture: ComponentFixture<ManufacturerNewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerNewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
