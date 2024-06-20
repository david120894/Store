import {Component, inject, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgSelectModule} from "@ng-select/ng-select";
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";

@Component({
  selector: 'app-modal-create-motorcycle',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgSelectModule
  ],
  templateUrl: './modal-create-motorcycle.component.html',
  styleUrl: './modal-create-motorcycle.component.css'
})
export class ModalCreateMotorcycleComponent implements OnInit{

  @Input() name = ''
  dataMotorcycle: any
  dataMotorcycleType: any

  formMotorcycle: FormGroup = new FormGroup({
    brand:  new FormControl(null),
    model: new FormControl(null),
    year: new FormControl(null),
    color: new FormControl(null),
    price: new FormControl(null),
    idTypeMotorcycle: new FormControl(null)
  })

  get form() {
    return this.formMotorcycle.controls
  }

  constructor(public activeModal: NgbActiveModal,
              private readonly motorcycleUseCase: MotorcycleUseCase) {
  }

  async ngOnInit() {
    await this.getMotorcycleType()
  }

  async createMotorcycle() {
    const params = {
      brand: this.form['brand'].value,
      model: this.form['model'].value,
      year: this.form['year'].value,
      color: this.form['color'].value,
      price: this.form['price'].value,
      motorcycleType: {
        id: this.form['idTypeMotorcycle'].value
      }
    }
    await this.motorcycleUseCase.createMotorcycle(params)
    this.activeModal.close('success')
    window.location.reload()
  }

  async getMotorcycleType() {
    this.dataMotorcycleType = await this.motorcycleUseCase.getMotorcycleType()
  }
}
