import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MotorcycleService} from "../service/motorcycle.service";
import {MotorcycleUseCase} from "../domain/motorcycle.usecase";

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
  constructor(private readonly motorcycleService: MotorcycleService,
              private readonly motorcycleUseCase: MotorcycleUseCase) {
  }

  async ngOnInit() {
    await this.getMotorcycle()
  }

  async getMotorcycle() {
    this.dataMotorcycle = await this.motorcycleUseCase.getMotorcycle()

  }
}
