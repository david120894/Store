import {Routes} from "@angular/router";
import {ArticleComponent} from "./article/article.component";
import {MotorcycleComponent} from "./motorcycle/motorcycle.component";

export const MOTORCYCLE_ROUTES: Routes = [
  {
    path: '',
    component: ArticleComponent
  },
  {
    path: ':motorcycle',
    component: MotorcycleComponent
  }
]
