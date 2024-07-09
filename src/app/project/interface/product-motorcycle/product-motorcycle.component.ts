import {Component, OnInit} from '@angular/core';
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";
import {NgbModal, NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {ModalCreateProductComponent} from "../modal-create-product/modal-create-product.component";
import {ModalCreateProductTypeComponent} from "../modal-create-product-type/modal-create-product-type.component";

@Component({
  selector: 'app-product-motorcycle',
  standalone: true,
  imports: [
    NgbTooltip
  ],
  templateUrl: './product-motorcycle.component.html',
  styleUrl: './product-motorcycle.component.css'
})
export class ProductMotorcycleComponent implements OnInit {

  listProducts: any

  constructor(private readonly motorcycleUseCase: MotorcycleUseCase,
              private readonly ngbModal: NgbModal) {
  }

  async ngOnInit() {
    await this.getProduct()
  }

  async getProduct() {
    const dataProduct = await this.motorcycleUseCase.getProductMotorcycle()
    this.listProducts = dataProduct
    console.log(dataProduct)
  }

  editProduct(id: number) {
    const modalRef = this.ngbModal.open(ModalCreateProductComponent, {size: 'xl'})
    modalRef.componentInstance.id = id
  }

  openModalCreateProduct() {
    const modalRef = this.ngbModal.open(ModalCreateProductComponent, { size: 'xl'})
    modalRef.result.then(async (result) => {
      if (result == 'success') {
        await this.getProduct()
      }
    })
  }

  openModalCreateProductType() {
    const modalRef = this.ngbModal.open(ModalCreateProductTypeComponent, { size: 'md'})
  }
  deleteProduct(id: number) {

  }
}
