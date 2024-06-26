import { Routes } from '@angular/router';
import {loggedGuard} from "./core/guards/logged.guard";

export const routes: Routes = [

  {
    path: '',
    loadChildren:() => import('../app/project/interface/motorcycle.routes').then(m => m.MOTORCYCLE_ROUTES),
  },
  {
    path: 'admin',
    loadChildren:() => import('./auth/auth.routes').then(m => m.AUTH_ROUTES),
  },
  {
    path: 'dashboard',
    loadChildren:() => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
  }
];

