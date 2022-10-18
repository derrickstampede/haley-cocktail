import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchRoutes } from './search.routing';

import { SearchComponent } from './search.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    SearchComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SearchRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SearchModule { }
