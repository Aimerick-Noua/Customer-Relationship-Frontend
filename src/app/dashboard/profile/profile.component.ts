import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';
import { UserService } from 'src/app/_services/user.service';
import { EventBusService } from 'src/app/_shared/event-bus.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form: any = {
    firstname: null,
    lastname: null,
    phone: null,
    address: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  allUsers:any;
  isLoggedIn: any;
  username: any;
  content: any;
  errormessage = ''
  roles: any;
  showAdminBoard: any;
  showModeratorBoard: any;
 userData:any = [];
 userId!:number;
  constructor(private userService: UserService, private storageService: StorageService, private authService:AuthService

  ) { }
  profileImage: string = 'assets/img/user4-128x128.jpg'; // Default image

  

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
      this.userId=user.id;
    }
    this.getEmployeeById()
  }

  getEmployeeById(){
  this.userService.getAdminBoard(this.userId).subscribe(
    (data:any)=>{
      this.userData = data;
      console.log(this.userData);
      
    }
  ),
  (err:Error)=>{
    this.errormessage=err.message;
    console.log("error");
    
    }
  }

  selectedFile!: File;
  defaultProfilePictureUrl = 'assets/img/user4-128x128.jpg'; // Replace with the actual URL
  previewImageUrl!: string;


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewSelectedImage();
  }

  previewSelectedImage() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewImageUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

   onSubmit(): void {
    const { firstname,lastname,phone,address, email, password } = this.form;

    this.authService.register(firstname, lastname, phone, address, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
  
}
