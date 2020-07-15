import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
  // logoutUser(){
  //   localStorage.removeItem('token');
  //   this.router.navigate(['/login'])
  // }
  title:String = "Product Management";
  ngOnInit() {
  }

}
