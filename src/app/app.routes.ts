import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { isUserAuthenticatedGuard } from './auth/is-user-authenticated.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  {
    path: 'books',
    loadChildren: () => import('./book/book.routes').then(m => m.bookRoutes),
    canMatch: [isUserAuthenticatedGuard]
  },
  { path: '**', redirectTo: '/about', pathMatch: 'full' }
];
