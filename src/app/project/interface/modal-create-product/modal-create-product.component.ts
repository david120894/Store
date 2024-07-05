import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";

@Component({
  selector: 'app-modal-create-product',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgSelectModule
  ],
  templateUrl: './modal-create-product.component.html',
  styleUrl: './modal-create-product.component.css'
})
export class ModalCreateProductComponent implements OnInit {

  @Input() id = 0
  dataProductType: any
  selectedFile: File | null = null;


  constructor(private ngbActiveModal: NgbActiveModal,
              private readonly motorcycleUseCase: MotorcycleUseCase) {
  }

  formProduct: FormGroup = new FormGroup({
    name: new FormControl(null),
    description: new FormControl(null),
    price: new FormControl(null),
    stock: new FormControl(null),
    productType: new FormControl(null)
  })

  async ngOnInit() {
    if (this.id) {
      this.initFormProduct()
    }

    await this.getProductType()
  }

  closeModal() {
    this.ngbActiveModal.close()
  }

  get form() {
    return this.formProduct.controls
  }

  initFormProduct() {
    this.formProduct.patchValue({
      name: 'hola',
      description: '',
      price: '',
      stock: '',
      productType: null
    })
  }

  async getProductType() {
    this.dataProductType = await this.motorcycleUseCase.getProductMotorcycleType()
  }

  async createProduct() {
    const formData = new FormData()
    const product = {
      name: this.form['name'].value,
      description: this.form['description'].value,
      price: this.form['price'].value,
      stock: this.form['stock'].value,
      productMotorcycleType: {
        id: this.form['productType'].value
      }
    }
    formData.append('product', JSON.stringify(product))
    if (this.selectedFile) {
      formData.append('file', this.selectedFile, this.selectedFile?.name)
    }

    try {
      await this.motorcycleUseCase.createProductMotorcycle(formData)
      this.ngbActiveModal.close('success')
    } catch (err) {
      console.error('Error creating product', err)
      this.ngbActiveModal.close('error')
    }
    console.log(product)
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
