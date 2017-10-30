import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountCodeComponent } from './create-account-code.component';

describe('CreateAccountCodeComponent', () => {
  let component: CreateAccountCodeComponent;
  let fixture: ComponentFixture<CreateAccountCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
