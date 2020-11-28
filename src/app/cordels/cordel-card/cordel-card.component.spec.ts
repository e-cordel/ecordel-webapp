import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordelCardComponent } from './cordel-card.component';

describe('CordelComponent', () => {
  let component: CordelCardComponent;
  let fixture: ComponentFixture<CordelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordelCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
