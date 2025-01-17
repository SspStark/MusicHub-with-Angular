import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!:FormGroup
  showPassword = false
  errorMsg!:string
  isLoading = false

  constructor(
    private router:Router,
    private authService:AuthService
  ){}

  ngOnInit():void{
    this.registerForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }

  togglePassword(){
    this.showPassword = !this.showPassword
  }

  onSubmit(){
    if (this.registerForm.valid){
      this.isLoading = true;
      const registerData = this.registerForm.value;
      this.authService.register(registerData).subscribe(
        () => {
          this.router.navigate(['/login'])
        },
        (error) => {
          this.errorMsg = error.error ? error.error.error : 'An error occurred. Please try again later.';
          this.isLoading = false;
        },
        ()=>{
          this.isLoading = false;
        }
      )
    }
  }

  login(){
    this.router.navigate(['/login'])
  }
}
