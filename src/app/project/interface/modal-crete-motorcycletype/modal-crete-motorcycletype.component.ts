import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";

@Component({
  selector: 'app-modal-crete-motorcycletype',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modal-crete-motorcycletype.component.html',
  styleUrl: './modal-crete-motorcycletype.component.css'
})
export class ModalCreteMotorcycletypeComponent implements OnInit {

  checkedButton: boolean = false;
  dataMotorcycleType: any
  dataEditMotorcycleType: any

  constructor(public activeModal: NgbActiveModal,
              private readonly motorcycleUseCase: MotorcycleUseCase) {
  }

  formMotorcycleType: FormGroup = new FormGroup({
    nameMotorcycleType: new FormControl(null),
  })

  async ngOnInit() {
    await this.getAllMotorcycleType()
  }

  get form() {
    return this.formMotorcycleType.controls
  }

  async saveMotorcycleType() {
    const params = {
      motorcycleType: this.form['nameMotorcycleType'].value
    }
    await this.motorcycleUseCase.createMotorcycleType(params)
    this.activeModal.close()

  }

  async getAllMotorcycleType() {
    this.dataMotorcycleType = await this.motorcycleUseCase.getMotorcycleType()
    console.log('data prueba', this.dataMotorcycleType)
  }

  async editMotorcycleType(id: string) {
    this.checkedButton = true;
    this.dataEditMotorcycleType = await this.motorcycleUseCase.getMotorcycleTypeById(parseInt(id))
    this.formMotorcycleType.patchValue({
      nameMotorcycleType: this.dataEditMotorcycleType.motorcycleType
    })
  }

  async updateMotorcycleType() {
    const params = {
      motorcycleType: this.form['nameMotorcycleType'].value
    }
    await this.motorcycleUseCase.updateMotorcycleType(parseInt(this.dataEditMotorcycleType.id), params)
    this.activeModal.close()
    this.checkedButton = false;
  }

  deleteMotorcycleType(id: number) {
  }
}
