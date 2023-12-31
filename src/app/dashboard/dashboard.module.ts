import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { ChartComponent } from './chart/chart.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { FrameComponent } from './frame/frame.component';
import { GarbageManagementComponent } from './garbage-point/garbage-management/garbage-management.component';
import { GarbagePointComponent } from './garbage-point/garbage-point.component';
import { HeaderComponent } from './header/header.component';
import { LeftSidenavComponent } from './left-sidenav/left-sidenav.component';
import { ManagerManagementComponent } from './manager-management/manager-management.component';
import { BackAccountFormatPipe } from './pipes/back-account-format.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ProfileComponent } from './profile/profile.component';
import { RightSidenavComponent } from './right-sidenav/right-sidenav.component';
import { EmployeeManagementComponent } from './user-list/employee-management/employee-management.component';
import { UserListComponent } from './user-list/user-list.component';
import { ViewEmployeeComponent } from './user-list/view-employee/view-employee.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import{MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ChatComponent } from './chat/chat.component';
import { CommandComponent } from './command/command.component';
import { ClientComponent } from './client/client.component';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { ViewClientComponent } from './client/view-client/view-client.component';
import { UserbyidBarchartComponent } from './chart/userbyid-barchart/userbyid-barchart.component';
import { NgChartsModule } from 'ng2-charts';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LeftSidenavComponent,
    RightSidenavComponent,
    FooterComponent,
    DashboardComponent,
    ContentComponent,
    HeaderComponent,
    UsermanagementComponent,
    ChartComponent,
    ProfileComponent,
    FrameComponent,
    CapitalizePipe,
    BackAccountFormatPipe,
    EmployeeManagementComponent,
    ManagerManagementComponent,
    AdminManagementComponent,
    UserListComponent,
    ViewEmployeeComponent,
    GarbagePointComponent,
    GarbageManagementComponent,
    ChatComponent,
    CommandComponent,
    ClientComponent,
    ClientFormComponent,
    ViewClientComponent,
    UserbyidBarchartComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressBarModule,
    NgChartsModule
  ]
})
export class DashboardModule { }
