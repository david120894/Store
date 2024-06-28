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
    try {
      this.dataMotorcycle = await this.motorcycleUseCase.getMotorcycle();
      await Promise.all(this.dataMotorcycle.map(async (motorcycle) => {
        const blob = await this.motorcycleUseCase.getMediaFile(motorcycle.image);
        motorcycle.imageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
      }));
    } catch (error) {
      console.error('Error loading motorcycles:', error);
    }

    console.log(this.dataMotorcycle);
  }

  async getImage(fileName: string) {
    try {
      const blob = await this.motorcycleUseCase.getMediaFile(fileName);
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
      console.log(this.imageUrl);
      return this.imageUrl

    } catch (error) {
      console.error('Error loading image:', error);
    }
    return '';
  }
  async loadAllImages() {
    const imagePromises = this.dataMotorcycle.map((motorCycle: any) => this.getImage(motorCycle.image));
    await Promise.all(imagePromises);
  }
}
