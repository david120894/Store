import {Component, inject, Input, OnInit} from '@angular/core';
import {MotorcycleService} from "../service/motorcycle.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgSelectModule} from "@ng-select/ng-select";

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

  constructor(private readonly motorcycleService: MotorcycleService,
              public activeModal: NgbActiveModal ) {
  }

  ngOnInit() {
    this.getMotorcycleType()
  }

  createMotorcycle() {
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
    this.motorcycleService.addMotorcycle(params).subscribe(
      response => {
        console.log('Motorcycle added successfully', response);
        this.activeModal.close('success')
      },
      error => {
        console.error('Error adding motorcycle', error);
      }
    );
    console.log(params)
  }
  getMotorcycleType() {
    this.motorcycleService.getMotorcycleType().subscribe((data: any)=>{
      this.dataMotorcycleType = data
      console.log(data)
    })
  }
}
