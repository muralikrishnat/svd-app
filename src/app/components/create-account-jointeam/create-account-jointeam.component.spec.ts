import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountJointeamComponent } from './create-account-jointeam.component';

describe('CreateAccountJointeamComponent', () => {
  let component: CreateAccountJointeamComponent;
  let fixture: ComponentFixture<CreateAccountJointeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountJointeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountJointeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
