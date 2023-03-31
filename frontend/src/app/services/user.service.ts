import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { user } from '../components/partials/header/shared/models/user';
import { IuserLogin } from '../components/partials/header/shared/interfaces/IuserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../components/partials/header/shared/constants/urls';
import { ToastrService } from 'ngx-toastr';
const USER_KEY='user'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubjet=new BehaviorSubject<user>(this.getUserFromLocalStored());
  public userObservable:Observable<user>;
  constructor(private http:HttpClient,private toastrServices:ToastrService) {
    this.userObservable=this.userSubjet.asObservable();
  }

  userLogin(userLogin:IuserLogin):Observable<user>{
    return this.http.post<user>(USER_LOGIN_URL,userLogin).pipe(
      tap({
        next:(user)=>{
          this.setUserToLocalStored(user)
          this.userSubjet.next(user);
          this.toastrServices.success(`Bienvenido a mi tienda ${user.name}!`,
          `Ingreso correcto`
          )
        },
          error:(errorResponse)=>{
            this.toastrServices.error(errorResponse.error,'Ingreso Fallido')
          }
      })
    )

  }

  Logout(){
    this.userSubjet.next(new user());
    localStorage.removeItem(USER_KEY);
    window.location.reload()
  }

  private setUserToLocalStored(user:user){
    localStorage.setItem(USER_KEY,JSON.stringify(user));
  }
  private getUserFromLocalStored():user{
    const userJson=localStorage.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as user;
    return new user();
  }
}
