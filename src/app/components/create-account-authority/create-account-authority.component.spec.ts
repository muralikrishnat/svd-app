import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountAuthorityComponent } from './create-account-authority.component';

describe('CreateAccountAuthorityComponent', () => {
  let component: CreateAccountAuthorityComponent;
  let fixture: ComponentFixture<CreateAccountAuthorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountAuthorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountAuthorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
