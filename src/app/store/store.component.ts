import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import {ModalCreateMotorcycleComponent} from "../modal-create-motorcycle/modal-create-motorcycle.component";
import {CarouselMotorcycleComponent} from "../carousel-motorcycle/carousel-motorcycle.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ArticleComponent,
    ModalCreateMotorcycleComponent,
    CarouselMotorcycleComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

  jesus="david jesus"
  constructor(private modalService: NgbModal) {
  }
  openModal() {
    const  modalRef = this.modalService.open(ModalCreateMotorcycleComponent,
      {
        size : 'lg'
      });
    modalRef.componentInstance.name=this.jesus
  }
}
