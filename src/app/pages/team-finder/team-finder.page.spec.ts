import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFinderPage } from './team-finder.page';

describe('TeamFinderPage', () => {
  let component: TeamFinderPage;
  let fixture: ComponentFixture<TeamFinderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFinderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFinderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
