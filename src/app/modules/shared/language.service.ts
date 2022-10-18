import { Injectable } from '@angular/core';
import { throwError, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  lang = new BehaviorSubject<any>('EN');

  constructor() { }

  changeLanguage(lang: string) {
    this.lang.next(lang);
  }
  
}
