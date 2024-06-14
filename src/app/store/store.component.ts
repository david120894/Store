import {Component, OnInit} from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import {ModalCreateMotorcycleComponent} from "../modal-create-motorcycle/modal-create-motorcycle.component";
import {CarouselMotorcycleComponent} from "../carousel-motorcycle/carousel-motorcycle.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MotorcycleService} from "../service/motorcycle.service";

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ArticleComponent,
    ModalCreateMotorcycleComponent,
    CarouselMotorcycleComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit{

  jesus="david jesus"
  message = ""
  dataMotorcycleType: any
  constructor(private modalService: NgbModal,
              private readonly motorcycleService: MotorcycleService) {
  }

  ngOnInit() {
    this.getMotorcycleType()
  }

  openModal() {
    const  modalRef = this.modalService.open(ModalCreateMotorcycleComponent,
      {
        size : 'lg'
      });
    modalRef.componentInstance.name=this.jesus
    modalRef.result.then((result) => {
      this.message = result
    })
  }

  getMotorcycleType() {
    this.motorcycleService.getMotorcycleType().subscribe((data: any)=>{
      this.dataMotorcycleType = data
      console.log(data)
    })
  }
}
