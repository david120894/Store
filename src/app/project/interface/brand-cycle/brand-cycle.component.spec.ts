import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCycleComponent } from './brand-cycle.component';

describe('BrandCycleComponent', () => {
  let component: BrandCycleComponent;
  let fixture: ComponentFixture<BrandCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandCycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
