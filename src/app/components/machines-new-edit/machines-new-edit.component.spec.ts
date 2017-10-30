import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesNewEditComponent } from './machines-new-edit.component';

describe('MachinesNewEditComponent', () => {
  let component: MachinesNewEditComponent;
  let fixture: ComponentFixture<MachinesNewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesNewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinesNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
