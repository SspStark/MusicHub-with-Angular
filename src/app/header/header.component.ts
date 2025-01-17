import { Component } from '@angular/core';
//import { ThemeService } from '../services/theme.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isThemeDark = true;
  faSun = faSun;
  faMoon = faMoon;

  constructor(
    //private themeService:ThemeService,
    private router:Router,
    private cookieService:CookieService
  ){
    // this.themeService.isThemeDark$.subscribe(
    //   (theme) => (this.isThemeDark = theme)
    // )
  }

  // toggleTheme(){
  //   this.themeService.toggleTheme();
  // }

  logout(){
    this.cookieService.delete('jwt_token')
    this.router.navigate(['/login'])
  }
}
