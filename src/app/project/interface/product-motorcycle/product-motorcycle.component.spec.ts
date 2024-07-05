import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMotorcycleComponent } from './product-motorcycle.component';

describe('ProductMotorcycleComponent', () => {
  let component: ProductMotorcycleComponent;
  let fixture: ComponentFixture<ProductMotorcycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductMotorcycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductMotorcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
