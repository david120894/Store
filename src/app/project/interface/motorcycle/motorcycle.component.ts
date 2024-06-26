import {Component, OnInit} from '@angular/core';
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";
import {NgbModal, NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {ModalCreateMotorcycleComponent} from "../modal-create-motorcycle/modal-create-motorcycle.component";
import {ModalCreteMotorcycletypeComponent} from "../modal-crete-motorcycletype/modal-crete-motorcycletype.component";
import {ToastrService} from "ngx-toastr";
import {BrandCycleComponent} from "../brand-cycle/brand-cycle.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-motorcycle',
  standalone: true,
  imports: [
    NgbTooltip,
    RouterLink
  ],
  templateUrl: './motorcycle.component.html',
  styleUrl: './motorcycle.component.css'
})
export class MotorcycleComponent implements OnInit  {

  urlImage = ""
  dataMotorcycle: any
  dataEditMotorcycle: any

  constructor(private readonly motorcycleUseCase: MotorcycleUseCase,
              public ngbModal: NgbModal,
              private toastrService: ToastrService) { }

  async ngOnInit(){
    await this.getMotorcycle()
  }

  async getMotorcycle() {
    const motorcycle = await this.motorcycleUseCase.getMotorcycle()
    this.dataMotorcycle = motorcycle
    // if (this.dataEditMotorcycle) {
    //   this.urlImage = await this.motorcycleUseCase.getMediaFile(this.dataEditMotorcycle[8].image)
    // }
    // console.log('image',this.urlImage)
    console.log(motorcycle)
  }

  async openModalCreateMotorcycle() {
    const modalRef = this.ngbModal.open(ModalCreateMotorcycleComponent, { size: 'lg'})
    modalRef.result.then(async (result) => {
      if(result ==='success') {
        await this.getMotorcycle()
        this.toastrService.success('Motorcycle created successfully!')
      }
    })
  }

  openModalCreateMotorcycleType() {
    const modalRef = this.ngbModal.open(ModalCreteMotorcycletypeComponent, { size: 'md'})
  }

  openBrandCycle() {
    const modalRef = this.ngbModal.open(BrandCycleComponent, { size: 'md'})
  }
  async editMotorcycle(id: number) {
    const modalRef = this.ngbModal.open(ModalCreateMotorcycleComponent, { size:'lg'})
    modalRef.componentInstance.id = id
    modalRef.result.then((result) => {
      if(result ==='success') {
        this.getMotorcycle()
        this.toastrService.success('Motorcycle updated successfully!')
      }
    })
  }



}
