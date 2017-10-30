import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMachinesComponent } from './my-machines.component';

describe('MyMachinesComponent', () => {
  let component: MyMachinesComponent;
  let fixture: ComponentFixture<MyMachinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMachinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
