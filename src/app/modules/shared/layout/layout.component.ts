import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
  }

  onChangeLanguage(event: any) {
    const lang = event.target.value;
    this.languageService.changeLanguage(lang);
  }

}
