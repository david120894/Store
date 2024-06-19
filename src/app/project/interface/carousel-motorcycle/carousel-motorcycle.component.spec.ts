import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMotorcycleComponent } from './carousel-motorcycle.component';

describe('CarouselMotorcycleComponent', () => {
  let component: CarouselMotorcycleComponent;
  let fixture: ComponentFixture<CarouselMotorcycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselMotorcycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselMotorcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
