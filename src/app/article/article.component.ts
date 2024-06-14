import {Component, OnInit} from '@angular/core';
import {MotorcycleService} from "../service/motorcycle.service";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{

  dataMotorcycle: any
  constructor(private readonly motorcycleService: MotorcycleService) {
  }

  ngOnInit() {
    this.getMotorcycle()
  }
  getMotorcycle() {
    this.motorcycleService.getMotorcycle().subscribe((data:any)=> {
      this.dataMotorcycle = data
    })
  }
}
