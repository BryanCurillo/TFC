import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruequeComponent } from './trueque.component';

describe('TruequeComponent', () => {
  let component: TruequeComponent;
  let fixture: ComponentFixture<TruequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruequeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
