import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CordelListComponent } from './cordel-list.component';



describe('CordelListComponent', () => {
  let component: CordelListComponent;
  let fixture: ComponentFixture<CordelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
