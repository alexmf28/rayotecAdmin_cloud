import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  bloqueo: boolean = false;
  
  constructor(
    private fb:FormBuilder,
    // private UserService: UserService,
    public router: Router
  ) {
    // const token = localStorage.getItem('token');

    // if(token) { this.router.navigate(['/intranet/dashboard']); }
  }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  getControl(controlName:string):FormControl {
    return this.loginForm.get(controlName) as FormControl;
  }


  login() { 
    this.router.navigate(['/dashboard']); 
  }

}
