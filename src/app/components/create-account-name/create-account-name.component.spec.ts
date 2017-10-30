import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountNameComponent } from './create-account-name.component';

describe('CreateAccountNameComponent', () => {
  let component: CreateAccountNameComponent;
  let fixture: ComponentFixture<CreateAccountNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
