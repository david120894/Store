import {Routes} from "@angular/router";
import {ArticleComponent} from "./article/article.component";
import {MotorcycleComponent} from "./motorcycle/motorcycle.component";
import {ProductMotorcycleComponent} from "./product-motorcycle/product-motorcycle.component";
import {ProductComponent} from "./product/product.component";

export const MOTORCYCLE_ROUTES: Routes = [
  {
    path: '',
    component: ArticleComponent
  },
  {
    path: 'motorcycle',
    component: MotorcycleComponent
  },
  {
    path: 'product',
    component: ProductMotorcycleComponent
  },
  {
    path: 'view-products',
    component: ProductComponent
  }
]

