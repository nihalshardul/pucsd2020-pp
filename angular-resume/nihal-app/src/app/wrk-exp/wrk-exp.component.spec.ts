import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrkExpComponent } from './wrk-exp.component';

describe('WrkExpComponent', () => {
  let component: WrkExpComponent;
  let fixture: ComponentFixture<WrkExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrkExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrkExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
