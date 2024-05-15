import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

}
