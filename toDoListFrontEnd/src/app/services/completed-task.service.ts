import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompletedTask } from '../model/completed-task';

@Injectable({
  providedIn: 'root'
})
export class CompletedTaskService {

  apiUrl:string;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  
  addCompletedTask(completedTask:CompletedTask): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/completedTasks/addCompletedTask`, completedTask);
  }

  getAllCompletedTasks(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/completedTasks`);
  }

  getCompletedTaskById(id:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/completedTasks/${id}`);
  }
  
}
