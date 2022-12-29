import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinMissionBtnComponent } from './join-mission-btn.component';

describe('JoinMissionBtnComponent', () => {
  let component: JoinMissionBtnComponent;
  let fixture: ComponentFixture<JoinMissionBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinMissionBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinMissionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
