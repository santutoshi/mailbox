import { Routes } from '@angular/router';
import { ContentLayoutComponent } from './content-layout.component';

export const contentRoutes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inbox',
      },
      {
        path: 'inbox',
        loadChildren: () =>
          import('../../modules/inbox/inbox.module').then((m) => m.InboxModule),
      },
    ],
  },
];
