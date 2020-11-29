import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingsListComponent } from './waitings-list.component';

describe('WaitingsListComponent', () => {
  let component: WaitingsListComponent;
  let fixture: ComponentFixture<WaitingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
