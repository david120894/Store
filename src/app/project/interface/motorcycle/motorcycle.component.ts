import {Component, OnInit} from '@angular/core';
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";
import {NgbModal, NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {ModalCreateMotorcycleComponent} from "../modal-create-motorcycle/modal-create-motorcycle.component";

@Component({
  selector: 'app-motorcycle',
  standalone: true,
  imports: [
    NgbTooltip
  ],
  templateUrl: './motorcycle.component.html',
  styleUrl: './motorcycle.component.css'
})
export class MotorcycleComponent implements OnInit  {

  dataMotorcycle: any

  constructor(private readonly motorcycleUseCase: MotorcycleUseCase,
              public ngbModal: NgbModal) { }

  async ngOnInit(){
    await this.getMotorcycle()
  }

  async getMotorcycle() {
    const motorcycle = await this.motorcycleUseCase.getMotorcycle()
    this.dataMotorcycle = motorcycle
    console.log(motorcycle)
  }

  openModalCreateMotorcycle() {
    const modalRef = this.ngbModal.open(ModalCreateMotorcycleComponent, { size: 'lg'})
  }

}
