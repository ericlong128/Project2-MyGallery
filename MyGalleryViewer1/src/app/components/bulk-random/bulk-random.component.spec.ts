import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkRandomComponent } from './bulk-random.component';

describe('BulkRandomComponent', () => {
  let component: BulkRandomComponent;
  let fixture: ComponentFixture<BulkRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
