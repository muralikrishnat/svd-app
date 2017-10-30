import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyNewEditComponent } from './technology-new-edit.component';

describe('TechnologyNewEditComponent', () => {
  let component: TechnologyNewEditComponent;
  let fixture: ComponentFixture<TechnologyNewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyNewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
