import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepOverComponent } from './dep-over.component';

describe('DepOverComponent', () => {
  let component: DepOverComponent;
  let fixture: ComponentFixture<DepOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepOverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
