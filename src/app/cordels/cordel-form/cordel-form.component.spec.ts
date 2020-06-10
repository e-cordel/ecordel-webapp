import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordelFormComponent } from './cordel-form.component';

describe('CordelFormComponent', () => {
  let component: CordelFormComponent;
  let fixture: ComponentFixture<CordelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
