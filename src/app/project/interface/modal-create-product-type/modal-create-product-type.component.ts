import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
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

  listProductType: any
  constructor(private readonly motorcycleUseCase: MotorcycleUseCase){

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

  deleteProductType(id:number) {

  }
  editProductType(id:number) {

  }
}
