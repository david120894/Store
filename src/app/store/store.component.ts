import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import {ModalCreateMotorcycleComponent} from "../modal-create-motorcycle/modal-create-motorcycle.component";
import {CarouselMotorcycleComponent} from "../carousel-motorcycle/carousel-motorcycle.component";

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ArticleComponent, ModalCreateMotorcycleComponent, CarouselMotorcycleComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

}
