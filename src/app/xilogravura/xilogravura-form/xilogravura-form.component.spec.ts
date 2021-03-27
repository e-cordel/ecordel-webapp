import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XilogravuraFormComponent } from './xilogravura-form.component';

describe('XilogravuraFormComponent', () => {
  let component: XilogravuraFormComponent;
  let fixture: ComponentFixture<XilogravuraFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XilogravuraFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XilogravuraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
