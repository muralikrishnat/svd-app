import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountPasswordComponent } from './create-account-password.component';

describe('CreateAccountPasswordComponent', () => {
  let component: CreateAccountPasswordComponent;
  let fixture: ComponentFixture<CreateAccountPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
