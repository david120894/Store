import {Component, Input, OnInit} from '@angular/core';
import {MotorcycleUseCase} from "../../domain/motorcycle.usecase";
import {SafeUrl} from "@angular/platform-browser";
import {Motorcycle} from "../../domain/model/motorcycle";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  dataMotorcycle: Motorcycle [] = []
  @Input() refreshView = ''

  constructor(private readonly motorcycleUseCase: MotorcycleUseCase) {
  }

  async ngOnInit() {
    await this.getMotorcycle()
  }

  async getMotorcycle() {
    this.dataMotorcycle = await this.motorcycleUseCase.getMotorcycle();
  }

  getImage(fileName?: string) {
    if (fileName) {
      return this.motorcycleUseCase.getMediaFile(fileName)
    }
    return null
  }
}
