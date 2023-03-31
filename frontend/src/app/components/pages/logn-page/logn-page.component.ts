import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logn-page',
  templateUrl: './logn-page.component.html',
  styleUrls: ['./logn-page.component.css']
})
export class LognPageComponent implements OnInit {
  conteo=0;
  loginForm!:FormGroup;
  isSubmitted=false;
  returnUrl=''

  constructor(private formBuilder:FormBuilder,private userServices:UserService,private routerActivate:ActivatedRoute,private router:Router){

  }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
    this.returnUrl=this.routerActivate.snapshot.queryParams['returnUrl'];

  }
  get fc(){
    return this.loginForm.controls;
  }
  submit(){
    this.isSubmitted=true;

    if(this.loginForm.invalid) return ;

    this.userServices.userLogin({email:this.fc['email'].value,password:this.fc['password'].value}).subscribe(()=>{

      this.router.navigateByUrl(this.returnUrl)
    });

  }
}
