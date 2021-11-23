import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(){
    this.authService.getUserProfile().subscribe(
      res=>{
        this.userDetails=res['user'];
      },
      err=>{}
    );
  }

}
