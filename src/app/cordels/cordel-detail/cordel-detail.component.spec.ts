import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordelDetailComponent } from './cordel-detail.component';

describe('CordelDetailComponent', () => {
  let component: CordelDetailComponent;
  let fixture: ComponentFixture<CordelDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordelDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
