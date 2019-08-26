import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordelComponent } from './cordel.component';

describe('CordelComponent', () => {
  let component: CordelComponent;
  let fixture: ComponentFixture<CordelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
