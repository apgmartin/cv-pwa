import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsViewerComponent } from './skills-viewer.component';

describe('SkillsViewerComponent', () => {
  let component: SkillsViewerComponent;
  let fixture: ComponentFixture<SkillsViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
