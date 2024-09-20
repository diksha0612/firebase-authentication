import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent  implements OnInit {
  constructor(private auth:AuthService,private route:Router){

  }

signupForm!: FormGroup

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }


  onSignup(){
    if(this.signupForm.valid){
      const {email, password} = this.signupForm.value

      this.auth.signUp(email, password).subscribe((res)=>{
        if(res){
          this.route.navigate(['/login'])
        }
      })
    }
  }

}
