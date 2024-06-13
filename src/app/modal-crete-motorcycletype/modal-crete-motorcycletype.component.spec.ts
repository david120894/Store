import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreteMotorcycletypeComponent } from './modal-crete-motorcycletype.component';

describe('ModalCreteMotorcycletypeComponent', () => {
  let component: ModalCreteMotorcycletypeComponent;
  let fixture: ComponentFixture<ModalCreteMotorcycletypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCreteMotorcycletypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCreteMotorcycletypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
