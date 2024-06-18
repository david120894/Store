import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalCreateMotorcycleComponent} from "../modal-create-motorcycle/modal-create-motorcycle.component";
import {ModalCreteMotorcycletypeComponent} from "../modal-crete-motorcycletype/modal-crete-motorcycletype.component";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {

  dataMotorcycle: any
  @Input() refreshView = ''
  constructor(private readonly motorcycleUseCase: MotorcycleUseCase,
              public ngbModal: NgbModal) {
  }

  async ngOnInit() {
    await this.getMotorcycle()
  }

  async getMotorcycle() {
    this.dataMotorcycle = await this.motorcycleUseCase.getMotorcycle()

  }
  saveMotorcycle() {
    const modalRef = this.ngbModal.open(ModalCreateMotorcycleComponent,
      {
        size : 'lg'
      })
    modalRef.componentInstance.name='David Jesus'
  }

  saveMotorcycleType() {
    const modalRef = this.ngbModal.open(ModalCreteMotorcycletypeComponent,
      {
        size : 'md'
      })
    modalRef.componentInstance.name='David Jesus'
  }
}
