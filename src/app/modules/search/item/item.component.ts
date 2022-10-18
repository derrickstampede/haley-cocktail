import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from '../search.service';
import { LanguageService } from '../../shared/language.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [
    SearchService
  ]
})
export class ItemComponent implements OnInit {

  isLoading = true;
  name!: string;
  cocktail!: any;

  lang: any;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private languageService: LanguageService,
  ) { 
    this.route.params.subscribe(
      (data: any) => {
        this.name = data.name;
        this.searchService.find(this.name);
      }
    );
    this.searchService.emitCocktail.subscribe((data: any) => {
      this.cocktail = data;
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.languageService.lang.subscribe(
      lang => {
        this.lang = lang;
      }
    );
  }

}
