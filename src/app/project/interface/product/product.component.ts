import {Component, OnInit} from '@angular/core';
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  listProducts: any[] = []
  constructor(private readonly motorcycleUseCase: MotorcycleUseCase) { }

  async ngOnInit(){
    await this.getProductMotorcycle()
  }

  async getProductMotorcycle() {
    this.listProducts = await this.motorcycleUseCase.getProductMotorcycle();
  }

  getImage(fileName?: string) {
    if (fileName) {
      return this.motorcycleUseCase.getFileProduct(fileName)
    }
    return null
  }
}
