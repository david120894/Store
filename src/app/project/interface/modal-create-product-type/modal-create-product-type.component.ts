import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgbActiveModal, NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";

@Component({
  selector: 'app-modal-create-product-type',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgbTooltip
  ],
  templateUrl: './modal-create-product-type.component.html',
  styleUrl: './modal-create-product-type.component.css'
})
export class ModalCreateProductTypeComponent implements OnInit {

  editProductMotorcycleType = false;
  dataEditProductMotorcycleType: any
  listProductType: any
  constructor(private readonly motorcycleUseCase: MotorcycleUseCase,
              private ngbActiveModal: NgbActiveModal){

  }
  formProductType : FormGroup = new FormGroup({
    typeName: new FormControl(null)
  })

  async ngOnInit() {
    await this.getProductMotorcycleType()
  }

  get form(){
    return this.formProductType.controls
  }
  async getProductMotorcycleType() {
    this.listProductType = await this.motorcycleUseCase.getProductMotorcycleType()
  }

  async saveProductMotorcycleType() {
    const params = {
      typeName: this.form['typeName'].value
    }
    await this.motorcycleUseCase.createProductMotorcycleType(params)
    await this.getProductMotorcycleType()
    this.formProductType.reset()
  }
  deleteProductType(id:number) {

  }
  async editProductType(id:number) {
    this.editProductMotorcycleType = true;
    this.dataEditProductMotorcycleType = await this.motorcycleUseCase.getProductMotorcycleTypeId(id)
    this.formProductType.patchValue({
      typeName: this.dataEditProductMotorcycleType.typeName
    })
  }

  async updateProductMotorcycleType() {
    const params = {
      id: this.dataEditProductMotorcycleType.id,
      typeName: this.form['typeName'].value
    }
    console.log(params)
    await this.motorcycleUseCase.updateProductMotorcycleType(params, this.dataEditProductMotorcycleType.id)
    await this.getProductMotorcycleType()
    this.formProductType.reset()
    this.editProductMotorcycleType = false;
  }
  close() {
    this.ngbActiveModal.close()
  }
}
