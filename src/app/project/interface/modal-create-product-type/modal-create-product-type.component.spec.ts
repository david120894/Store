import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateProductTypeComponent } from './modal-create-product-type.component';

describe('ModalCreateProductTypeComponent', () => {
  let component: ModalCreateProductTypeComponent;
  let fixture: ComponentFixture<ModalCreateProductTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCreateProductTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCreateProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
