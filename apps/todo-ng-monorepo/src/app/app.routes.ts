import { Route } from '@angular/router';
import { NxWelcomeComponent } from './components/nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: NxWelcomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'underline',
        loadComponent: () =>
          import('./components/underline-host.component').then((m) => m.UnderlineHostComponent),
      },
];
