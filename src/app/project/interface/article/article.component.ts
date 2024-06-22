import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Motorcycle} from "../../domain/model/motorcycle";
import {NgSelectModule} from "@ng-select/ng-select";
import {Brandcycle} from "../../domain/model/brandcycle";
import {MotorcycleType} from "../../domain/model/motorcycleType";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    NgSelectModule
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {

  dataMotorcycle: Motorcycle[] = [];
  dataMotorcycleType:MotorcycleType[] = []
  dataBrandMotorcycle: Brandcycle[] = [];
  @Input() refreshView = ''

  constructor(private readonly motorcycleUseCase: MotorcycleUseCase,
              public ngbModal: NgbModal) {
  }

  async ngOnInit() {
    await this.getMotorcycle()
    await this.getBrandMotorcycle()
    await this.getMotorcycleType()
  }

  async getMotorcycle() {
    this.dataMotorcycle = await this.motorcycleUseCase.getMotorcycle()

  }

  async getBrandMotorcycle() {
    await this.motorcycleUseCase.getBrandMotorcycle()
      .then((brandMotorcycle: Brandcycle[]) => {
        this.dataBrandMotorcycle = brandMotorcycle;
      })
  }

  async getMotorcycleType() {
    await this.motorcycleUseCase.getMotorcycleType()
      .then((motorcycleType:MotorcycleType[]) => {
        this.dataMotorcycleType = motorcycleType;
      })
    console.log(this.dataMotorcycleType);
  }
}
