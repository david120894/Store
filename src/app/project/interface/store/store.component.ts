import {Component, OnInit} from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import {ModalCreateMotorcycleComponent} from "../modal-create-motorcycle/modal-create-motorcycle.component";
import {CarouselMotorcycleComponent} from "../carousel-motorcycle/carousel-motorcycle.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";

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
              private readonly motorcycleUseCase: MotorcycleUseCase) {
  }

  async ngOnInit() {
    await this.getMotorcycleType()
  }

  async getMotorcycleType() {
    const auxData = await this.motorcycleUseCase.getMotorcycle()
    console.log('data prueba',auxData)
  }
}
