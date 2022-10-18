import { Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

export const SearchRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'cocktail/:name',
        component: ItemComponent,
      },
    ],
  },
];
