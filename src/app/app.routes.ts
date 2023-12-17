import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DomainsComponent } from './pages/domains/domains.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'domains',
        component: DomainsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
];
