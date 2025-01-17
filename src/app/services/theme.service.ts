import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isThemeDark = new BehaviorSubject<boolean>(true);
  isThemeDark$ = this.isThemeDark.asObservable();

  toggleTheme(){
    const currentTheme = this.isThemeDark.value;
    this.isThemeDark.next(!currentTheme);
  }
}
