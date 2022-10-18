import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SearchService } from '../search.service';
import { LanguageService } from '../../shared/language.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [
    SearchService
  ]
})
export class ListComponent implements OnInit {

  isLoading = true;
  form!: FormGroup;

  lang: any;

  cocktails: any[] = [];

  constructor(
    private searchService: SearchService,
    private languageService: LanguageService,
    private formBuilder: FormBuilder,
  ) {
    this.searchService.emitCocktails.subscribe((data: any) => {
      this.cocktails = data;
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.languageService.lang.subscribe(
      lang => {
        this.lang = lang;
      }
    );

    this.form = this.formBuilder.group({
      'keyword': ['margarita', Validators.required],
    });
    this.onSubmit();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;
    const form = this.form.value;
    this.searchService.search(form.keyword);
  }

}
