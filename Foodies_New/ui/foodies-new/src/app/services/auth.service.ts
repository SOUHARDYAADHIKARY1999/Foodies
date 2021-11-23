import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import { UserModel } from '../models/user.model';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  selectedUser:UserModel={
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  noAuthHeader = {headers : new HttpHeaders({'NoAuth':'True'})}

  constructor(private http:HttpClient) {
  }

  // http methods

  postUser(user: UserModel){
    return this.http.post(environment.BASE_URL+'/register',user,this.noAuthHeader);
  }

  login(authCredentials){
    return this.http.post(environment.BASE_URL+'/authenticate',authCredentials,this.noAuthHeader);
  }

  getUserProfile(){
    return this.http.get(environment.BASE_URL+'/userprofile')
  }


  // helper methods

  getToken(){
    return localStorage.getItem('token');
  }

  setToken(token:string){
    localStorage.setItem('token',token);
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  getUserPayload(){
    var token = localStorage.getItem('token');
    if(token){
      var userPayload=atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else{
      return null;
    }
  }
  isLoggedIn(){
    var userPayload=this.getUserPayload();
    if(userPayload)
      return userPayload.exp>Date.now()/1000;
    else
      return false;
  }

}
