import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
  allUsers: any=[];
  errormessage!: string;
  joinedYearNumber:any=[];


  constructor( private userService: UserService) { }
  ngOnInit(): void {
 this.getAllUsersWithAllCommands();
  }


  getAllUsersWithAllCommands() {
    this.userService.getAllCommands().subscribe(
      (data: any) => {
        this.allUsers = data;
        this.joinedYearNumber = this.groupClientsByJoinedYear(this.allUsers);
        console.log(this.joinedYearNumber);
        
        }
      // }
    ),
      (err: Error) => {
        this.errormessage = err.message;
        console.log("error");
      }
  }
  
  private groupClientsByJoinedYear(clients: any[]): any[] {
    const groupedData: any[] = [];
    const JoinedYearMap = new Map<string, number>();

    // Loop through clients and group by hire year
    clients.forEach((client) => {
      const joinedDate = new Date(client.joinedDate);
      const joinedYear = joinedDate.getFullYear().toString();

      if (JoinedYearMap.has(joinedYear)) {
        JoinedYearMap.set(joinedYear, JoinedYearMap.get(joinedYear)! + 1);
      } else {
        JoinedYearMap.set(joinedYear, 1);
      }
    });

    // Convert map to an array of objects
    JoinedYearMap.forEach((count, year) => {
      groupedData.push({ year, clientCount: count });
    });

    return groupedData;
  }
}
