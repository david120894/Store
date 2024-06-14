import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateMotorcycleComponent } from './modal-create-motorcycle.component';

describe('ModalCreateMotorcycleComponent', () => {
  let component: ModalCreateMotorcycleComponent;
  let fixture: ComponentFixture<ModalCreateMotorcycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCreateMotorcycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCreateMotorcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
