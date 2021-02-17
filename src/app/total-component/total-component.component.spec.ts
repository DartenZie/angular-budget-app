import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalComponentComponent } from './total-component.component';

describe('TotalComponentComponent', () => {
  let component: TotalComponentComponent;
  let fixture: ComponentFixture<TotalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
