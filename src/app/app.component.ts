import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreComponent } from './project/interface/store/store.component';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './project/interface/article/article.component';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NavbarComponent} from "./shared/component/navbar/navbar.component";
import {HeaderComponent} from "./shared/component/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    StoreComponent,
    CommonModule,
    ArticleComponent,
    NgbModule,
   NavbarComponent,
    HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Store';
}
