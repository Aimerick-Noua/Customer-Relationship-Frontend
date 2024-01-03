import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8082/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};



@Injectable({
  providedIn: 'root',
})
export class UserService {
  deleteUser(id: number) {
return this.http.delete(`${API_URL}users/`+id,httpOptions)
  }
  getAllCommands() {
    return this.http.get(`${API_URL}users/clients`,httpOptions)
  }
  // getAllCommands(user_id:number) {
  //   return this.http.get(`${API_URL}/clients/`+user_id)
  // }
 
  updateEmployee(id: any, users: any) {
    return this.http.put(`${API_URL}users/update/`+id, users);
  }
  getEmployeeById(id: number) {
    return this.http.get(`${API_URL}users/` + id,httpOptions);
  }
  getAllEmployees() {
    return this.http.get(`${API_URL}users`);
  }
  deleteEmployee(id: number) {
    return this.http.delete(`${API_URL}users/` + id);
  }
  getAllUsers() {
    return this.http.get(`${API_URL}users`);
  }

  postAll(userData: any) {
    return this.http.post(`${API_URL}signup`, userData);
  }

  constructor(private http: HttpClient) {}

  update(id: any, userData: any) {
    return this.http.post(`${API_URL}` + id, userData, httpOptions);
  }

  updateProfileImage(id: number, profile: any): Observable<any> {
    return this.http.post(`${API_URL}${profile}/${id}`, profile, {
      responseType: 'arraybuffer',
    });
  }

  getPublicContent(username: string): Observable<any> {
    return this.http.get(`${API_URL}${username}`, httpOptions);
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(userId: number): Observable<any> {
    return this.http.get(`${API_URL}users/${userId}`, httpOptions);
  }

  usersByEmailDepartment(userId: number) {
    return this.http.get(`${API_URL}department/${userId}`, httpOptions);
  }
}
