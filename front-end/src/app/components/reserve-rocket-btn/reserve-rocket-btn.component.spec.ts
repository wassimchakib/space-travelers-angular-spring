import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveRocketBtnComponent } from './reserve-rocket-btn.component';

describe('ReserveRocketBtnComponent', () => {
  let component: ReserveRocketBtnComponent;
  let fixture: ComponentFixture<ReserveRocketBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveRocketBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveRocketBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
