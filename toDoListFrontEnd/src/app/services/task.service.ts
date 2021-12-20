import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from 'src/app/model/task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private apiUrl:string;

  constructor(private http:HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  addTask(task:Task): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tasks/addTask`, task);
  }

  getAllTasks(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tasks`);
  }

  getTaskById(id:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tasks/${id}`);
  }
  
  updateTaskById(id:number, task:Task): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/tasks/${id}`, task);
  }

  deleteTaskById(id:number):Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/tasks/${id}`);
  }

  deleteAllTasks() {
    this.http.delete(`${this.apiUrl}/tasks`);
  }

}
