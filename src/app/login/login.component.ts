import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  showPassword = false;
  errorMsg!:string;
  isLoading = false;

  constructor(
    private router:Router,
    private authService:AuthService,
    private cookieService:CookieService
  ){}

  ngOnInit(): void {
      this.loginForm = new FormGroup({
        username:new FormControl('',[Validators.required]),
        password:new FormControl('',[Validators.required])
      });
  }

  togglePassword(){
    this.showPassword = !this.showPassword;
  }

  onSubmit(){
    if (this.loginForm.valid){
      this.isLoading = true;
      const loginData = this.loginForm.value;
      this.authService.login(loginData).subscribe({
        next:(response) => {
          this.cookieService.set('jwt_token',response.jwt_token,30);
          this.router.navigate(['/']);
        },
        error:(error) => {
          this.errorMsg = error.error ? error.error.error:"An error occured. Please try again later.";
          console.log(error.error.error)
        },
        complete:() => {
          this.isLoading = false;
        }
    });
    }
  }

  signUp(){
    this.router.navigate(['/sign-up']);
  }

  forgotPassword(){
    alert("Sorry buddy, I haven't implemented the feature yet.");
  }
}
