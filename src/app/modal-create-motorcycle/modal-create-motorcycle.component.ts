import {Component, OnInit} from '@angular/core';
import {MotorcycleService} from "../service/motorcycle.service";

@Component({
  selector: 'app-modal-create-motorcycle',
  standalone: true,
  imports: [],
  templateUrl: './modal-create-motorcycle.component.html',
  styleUrl: './modal-create-motorcycle.component.css'
})
export class ModalCreateMotorcycleComponent implements OnInit{

  dataMotorcycle: any
  constructor(private motorcycle: MotorcycleService) {
  }

  ngOnInit() {
    this.getMotorcycle()
  }

  getMotorcycle() {
    this.motorcycle.getMotorcycle().subscribe((data:any) => {
      this.dataMotorcycle = data
    })
  }
}
