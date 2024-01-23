import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';
import { EventBusService } from 'src/app/_shared/event-bus.service';
import { ProfileComponent } from '../profile/profile.component';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.css']
})
export class LeftSidenavComponent {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false; 
  showEmployeeBoard = false;
  showUserBoard: boolean=false;

  username!:string;
  userData:any=[];

  userId: any;
  
  
  constructor(  private storageService: StorageService, private authService:UserService){}
  // ngOnInit():void{
  //   if(this.isLoggedIn){
  //     this.showAdminBoard = this.roles.includes('ADMIN');
  //   }
  // }
  // RegisterPage(){
  // this.route.navigate(['authentication/register']);
  // }
  // loginPage(){
  //   this.route.navigate(['authentication/login']);
  // }
  
  
  
  
  
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
  
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
  
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showEmployeeBoard = this.roles.includes('ROLE_EMPLOYEE');
      this.showUserBoard = this.roles.includes('ROLE_USER');
  
      this.userId = user.id;
    }
  
    this.authService.getEmployeeById(this.userId).subscribe(
      (data:any)=>{
        this.userData =data;
        this.username=this.userData.firstname;
    })
  }
  
}
