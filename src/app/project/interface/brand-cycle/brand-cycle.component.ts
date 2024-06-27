import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgbActiveModal, NgbModal, NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";
import {Brandcycle} from "../../domain/model/brandcycle";

@Component({
  selector: 'app-brand-cycle',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgbTooltip
  ],
  templateUrl: './brand-cycle.component.html',
  styleUrl: './brand-cycle.component.css'
})
export class BrandCycleComponent implements OnInit {

  updateButton = false;
  dataEdited: any
  brandsMotorcycle: Brandcycle[] = [];
  formBrandCycle: FormGroup = new FormGroup({
    brand: new FormControl(''),
  })

  constructor(
    private readonly ngbModal: NgbModal,
    public modalActive: NgbActiveModal,
    private readonly motorcycleUseCase: MotorcycleUseCase
  ) {
  }

  get form() {
    return this.formBrandCycle.controls;
  }

  async ngOnInit() {
    await this.getBrandMotorcycle();
  }

  async getBrandMotorcycle() {
    const brandMotorcycle = await this.motorcycleUseCase.getBrandMotorcycle()
    this.brandsMotorcycle = brandMotorcycle;
    console.log(brandMotorcycle);
  }

  async createBrandMotorcycle() {
    const params = {
      brandcycle: this.form['brand'].value
    }
    await this.motorcycleUseCase.createBrandMotorcycle(params)
    await this.getBrandMotorcycle()
    this.formBrandCycle.reset();
    console.log(params);
  }

  async editBrandMotorcycle(brandCycle?: number) {
    if (brandCycle) {
      this.updateButton = true;
      await this.motorcycleUseCase.getBrandMotorcycleById(brandCycle)
        .then(brandMotorcycle => {
          this.dataEdited = brandMotorcycle;
          this.formBrandCycle.patchValue({
              brand: brandMotorcycle.brandcycle
            }
          )
        });
    }
  }

  async updateBrandMotorcycle() {
    const params: Brandcycle = {
      brandcycle: this.form['brand'].value
    }
    if (this.dataEdited.id) {
      await this.motorcycleUseCase.updateBrandMotorcycle(this.dataEdited.id, params)
      await this.getBrandMotorcycle()
      this.formBrandCycle.reset();
      this.updateButton = false;
    }
  }
}
