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

  constructor(private http:HttpClient) {
  }

  postUser(user: UserModel){
    return this.http.post(environment.BASE_URL+'/register',user);
  }
}
