import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { SharedDataService } from 'src/app/_services/shared-data.service';
import { StorageService } from 'src/app/_services/storage.service';
import { UserService } from 'src/app/_services/user.service';
import Swal from 'sweetalert2';


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
  isUpdateFailed = false;
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
  constructor(private userService: UserService, private storageService: StorageService, private authService:AuthService, private sharedDataService:SharedDataService

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
      this.userData=this.form = data;
      this.sharedDataService.setFirstName(this.userData.firstname);

      
    }
  ),
  (err:Error)=>{
    this.errormessage=err.message;
    console.log("error");
    
    }
  }


  
   onSubmit(): void {
  
    const { firstname,lastname,phone,address} = this.form;
    
    this.authService.updateUser(this.userId, firstname, lastname, phone, address).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isUpdateFailed = false;
                Swal.fire({
          title: 'profile Updated Successfully',
          icon: 'success',
          timer: 3000, // Time in milliseconds (2 seconds in this example)
          timerProgressBar: true, // Show timer progress bar
          showConfirmButton: false, // Hide the "OK" button
        });
      },
      error: err => {
        // this.errorMessage = err.error.message;
        // this.isUpdateFailed = true;
        Swal.fire({
          title: this.errorMessage,
          icon: 'error',
          timer: 2000, // Time in milliseconds (2 seconds in this example)
          timerProgressBar: true, // Show timer progress bar
          showConfirmButton: false, // Hide the "OK" button
        });
      },
    });
  }
      
  
}
