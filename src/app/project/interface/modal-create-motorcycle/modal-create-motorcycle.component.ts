import {Component, inject, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgSelectModule} from "@ng-select/ng-select";
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";
import {ToastrService} from "ngx-toastr";
import {Brandcycle} from "../../domain/model/brandcycle";
import {Motorcycle} from "../../domain/model/motorcycle";

@Component({
  selector: 'app-modal-create-motorcycle',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgSelectModule,
  ],
  templateUrl: './modal-create-motorcycle.component.html',
  styleUrl: './modal-create-motorcycle.component.css'
})
export class ModalCreateMotorcycleComponent implements OnInit{

  @Input() id : number = 0
  dataMotorcycleType: any
  dataEditMotorcycle: any
  isEditMotorcycle = false;
  dataBrandMotorcycle: Brandcycle[] = []
  selectedFile: File | null = null;

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
              private readonly motorcycleUseCase: MotorcycleUseCase
  ) {
  }

  async ngOnInit() {
    await this.getMotorcycleType()
    await this.getBrandMotorcycle()
    if(this.id) {
      await this.getMotorcycleById()
    }
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async createMotorcycle() {

    const formData = new FormData();
    const motorcycleData: Motorcycle = {
      model: this.form['model'].value,
      year: this.form['year'].value,
      color: this.form['color'].value,
      price: this.form['price'].value,
      brandcycle: {
        id: this.form['brand'].value},
      motorcycleType:
        {id : this.form['idTypeMotorcycle'].value}
    }

    formData.append('motorcycle', JSON.stringify(motorcycleData));

    if (this.selectedFile) {
      formData.append('file', this.selectedFile, this.selectedFile.name);
    }

    try {
      await this.motorcycleUseCase.createMotorcycle(formData);
      this.activeModal.close('success');
    } catch (error) {
      console.error('Error creating motorcycle:', error);
    }
  }

  async getMotorcycleType() {
    this.dataMotorcycleType = await this.motorcycleUseCase.getMotorcycleType()
  }
  async getBrandMotorcycle() {
    this.dataBrandMotorcycle = await this.motorcycleUseCase.getBrandMotorcycle()
  }
  async getMotorcycleById() {
    this.isEditMotorcycle = true;
    this.dataEditMotorcycle = await this.motorcycleUseCase.getMotorcycleById(this.id)
    this.formMotorcycle.patchValue({
      brand: this.dataEditMotorcycle.brandcycle?.id,
      model: this.dataEditMotorcycle.model,
      year: this.dataEditMotorcycle.year,
      color: this.dataEditMotorcycle.color,
      price: this.dataEditMotorcycle.price,
      idTypeMotorcycle: this.dataEditMotorcycle.motorcycleType?.id
    })
  }

  async updateMotorcycle() {
    const params :Motorcycle = {
      model: this.form['model'].value,
      year: this.form['year'].value,
      color: this.form['color'].value,
      price: this.form['price'].value,
      brandcycle: {
        id: this.form['brand'].value
      },
      motorcycleType: {
        id: this.form['idTypeMotorcycle'].value
      }
    }
    await this.motorcycleUseCase.updateMotorcycle(this.id, params)
    this.activeModal.close('success')
  }
}
