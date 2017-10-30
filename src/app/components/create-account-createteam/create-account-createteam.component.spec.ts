import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountCreateteamComponent } from './create-account-createteam.component';

describe('CreateAccountCreateteamComponent', () => {
  let component: CreateAccountCreateteamComponent;
  let fixture: ComponentFixture<CreateAccountCreateteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountCreateteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountCreateteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
