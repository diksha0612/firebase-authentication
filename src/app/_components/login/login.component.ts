import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup

  constructor(private authService:AuthService) {}
  ngOnInit(): void {
    this.initForm()
  }


  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      const {email, password} = this.loginForm.value
      this.authService.login(email, password).subscribe((res)=>{

      })
    }

  }
  onGoogleLogin(){
    this.authService.googleSignIn().subscribe((res)=>{
      console.log("login with Google")
    })
  }



}
