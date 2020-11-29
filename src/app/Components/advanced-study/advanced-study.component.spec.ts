import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedStudyComponent } from './advanced-study.component';

describe('AdvancedStudyComponent', () => {
  let component: AdvancedStudyComponent;
  let fixture: ComponentFixture<AdvancedStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
