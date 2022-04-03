import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllartComponent } from './allart.component';

describe('AllartComponent', () => {
  let component: AllartComponent;
  let fixture: ComponentFixture<AllartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
