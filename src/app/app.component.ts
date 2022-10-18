import { Component } from '@angular/core';
import { LanguageService } from './modules/shared/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public constructor(private languageService: LanguageService) {}
}
