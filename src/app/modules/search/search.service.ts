import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class SearchService {
  private api = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  emitCocktails = new EventEmitter<any>();
  emitCocktail = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  search(keywords: string) {
    const url = this.api + keywords;
    return this.http
      .get(url)
      .pipe(map((response) => response))
      .subscribe(
        (data: any) => {
          this.emitCocktails.emit(data.drinks);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  find(name: string) {
    const url = this.api + name;
    return this.http
      .get(url)
      .pipe(map((response) => response))
      .subscribe(
        (data: any) => {
          const cocktail = data.drinks.filter((c: any) => c.strDrink === decodeURI(name))[0];
          this.emitCocktail.emit(cocktail);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
