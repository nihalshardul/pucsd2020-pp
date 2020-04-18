import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechKnowComponent } from './tech-know.component';

describe('TechKnowComponent', () => {
  let component: TechKnowComponent;
  let fixture: ComponentFixture<TechKnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechKnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
