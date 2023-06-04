import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  rol: string | null = '';
  username: string | null = '';

  constructor(
    // private userService:UserService,
    private router:Router
  ) {
    this.username = localStorage.getItem('nombre');
    this.rol = localStorage.getItem('rol');
  } 
  
  logout() {

    // this.userService.logout()
    // .subscribe(
    //   message => {
    //     localStorage.clear();
    //     MessageBox.success('Se cerró la sesión con exito');

        this.router.navigate(['/login']);
    //   }, 
    //   e => {MessageBox.error('Error server')}
    // ); 

    // console.log(this.username)
  }

}
