import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StoreComponent,CommonModule,ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Store';
}