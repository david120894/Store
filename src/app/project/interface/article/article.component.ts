import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalCreateMotorcycleComponent} from "../modal-create-motorcycle/modal-create-motorcycle.component";
import {ModalCreteMotorcycletypeComponent} from "../modal-crete-motorcycletype/modal-crete-motorcycletype.component";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  imageUrlMap: { [key: string]: SafeUrl } = {};

  dataMotorcycle: any
  @Input() refreshView = ''

  constructor(private readonly motorcycleUseCase: MotorcycleUseCase,
              public ngbModal: NgbModal,
              private sanitizer: DomSanitizer) {
  }

  async ngOnInit() {
    await this.getMotorcycle()
    await this.loadAllImages();
  }

  async getMotorcycle() {
    this.dataMotorcycle = await this.motorcycleUseCase.getMotorcycle()

  }

  async getImage(fileName: string) {
    if (this.imageUrlMap[fileName]) {
      return this.imageUrlMap[fileName];
    }

    try {
      const blob = await this.motorcycleUseCase.getMediaFile(fileName);
      const url = URL.createObjectURL(blob);
      const safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
      this.imageUrlMap[fileName] = safeUrl;
      console.log(safeUrl);
      return safeUrl;

    } catch (error) {
      console.error('Error loading media file', error);
      return '';
    }
  }
  async loadAllImages() {
    const imagePromises = this.dataMotorcycle.map((motorCycle: any) => this.getImage(motorCycle.image));
    await Promise.all(imagePromises);
  }
}
