import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalCreateMotorcycleComponent} from "../modal-create-motorcycle/modal-create-motorcycle.component";
import {ModalCreteMotorcycletypeComponent} from "../modal-crete-motorcycletype/modal-crete-motorcycletype.component";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

interface Motorcycle {
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
  image: string;
  imageUrl?: SafeUrl;
}

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  imageUrl: SafeUrl = '';
  dataMotorcycle: Motorcycle [] = []
  @Input() refreshView = ''

  constructor(private readonly motorcycleUseCase: MotorcycleUseCase,
              public ngbModal: NgbModal,
              private sanitizer: DomSanitizer) {
  }

  async ngOnInit() {
    await this.getMotorcycle()
    // await this.loadAllImages();
  }

  async getMotorcycle() {
    this.dataMotorcycle = await this.motorcycleUseCase.getMotorcycle();
  }

  getImage(fileName: string) {
    return this.motorcycleUseCase.getMediaFile(fileName)
  }
}
