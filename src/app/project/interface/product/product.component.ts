import {Component, OnInit} from '@angular/core';
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  productType: string = ''
  listProducts: any[] = []
  queryParamsSubscription: Subscription | null = null

  constructor(private readonly motorcycleUseCase: MotorcycleUseCase,
              private readonly route: ActivatedRoute) {
  }

  async ngOnInit() {
    await this.getParams()
  }

  async getParams() {
    this.route.queryParams.subscribe(params => {
      this.productType = params['productType']
      this.getProductMotorcycleByProductType()
    });
  }
  async getProductMotorcycle(id: number) {
    this.listProducts = await this.motorcycleUseCase.getProductMotorcycleByType(id);
  }

  async getProductMotorcycleByProductType() {
    const productType = await this.motorcycleUseCase.getProductMotorcycleType()
    productType.forEach((p: any) => {
      if (p.typeName === this.productType) {
        this.getProductMotorcycle(p.id)
        this.listProducts = []

      }
    })

  }

  getImage(fileName?: string) {
    if (fileName) {
      return this.motorcycleUseCase.getFileProduct(fileName)
    }
    return null
  }
}
