import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  countAdmin: number = 0;
  countEmployee: number = 0;
  userData: any = [];
  gpts: any;
  gbl: any;
  countClient: any;

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false; 
  showEmployeeBoard = false;
  showUserBoard: boolean=false;
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
  
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
  
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showEmployeeBoard = this.roles.includes('ROLE_EMPLOYEE');
      this.showUserBoard = this.roles.includes('ROLE_USER');
  
    }
    this.getAllUsers();
  }
  constructor(private userService: UserService, private storageService:StorageService) { }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (data: any) => {
        this.userData = data;
        console.log(this.userData);

        // Initialize counters for admins and users
        let countAdmin = 0;
        let countUser = 0;
        let countEmployee = 0;

        this.userData.forEach((element: any) => {
          if (element.roles[0].name === 'ROLE_ADMIN') {
            countAdmin++;
          } else if (element.roles[0].name === 'ROLE_EMPLOYEE') {
            countEmployee++;
          }
          else {
            countUser++;
          }
        });

        this.countAdmin = countAdmin;
        this.countEmployee = countEmployee;
        this.countClient = countUser;
      },
      (err: Error) => {
        console.log(err.message);
      }
    );
  }

}  
