import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyListComponent } from './technology-list.component';

describe('TechnologyListComponent', () => {
  let component: TechnologyListComponent;
  let fixture: ComponentFixture<TechnologyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
