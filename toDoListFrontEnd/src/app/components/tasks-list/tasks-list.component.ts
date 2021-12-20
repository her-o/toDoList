import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks!: Task[];
  addingTask:boolean = false;
  updatingTask:boolean = false;
  text: FormControl = new FormControl('',Validators.required);


  constructor(private service:TaskService, private router: Router) {

   }

  ngOnInit(): void {

    this.getAllTasks();

  }

  addTask() {
    const task = new Task(this.text.value);
    this.service.addTask(task).subscribe({
      next:(data) => {
        this.addingTask = false;
        this.getAllTasks()
      },
      error:(error) => console.log(error)
    });
  }

  getAllTasks() {
    this.service.getAllTasks().subscribe({
      next:(data) => this.tasks = data,
      error:(error) => console.log(error)
    });
  }

  getTask() {
    const id = 0;
    this.service.getTaskById(id).subscribe({
      next:(data)=>{},
      error:(error)=>{}
    });
  }

  updateTask(id:number) {
    this.service.updateTaskById(id, new Task(this.text.value)).subscribe({
      next:(data)=> {
        this.getAllTasks();
        this.updatingTask = !this.updatingTask;
      },
      error:(error)=>console.log(error)
    });
    
  }

  deleteTask(id:number) {
    this.service.deleteTaskById(id).subscribe({
      next: (data) =>  this.getAllTasks(),
      error: (error) => console.log(error)
    })
   
  }

  deleteAllTasks() {
    this.service.deleteAllTasks();
  }

  toggleTaskForm() {
    this.addingTask = !this.addingTask;
  }

  toggleUpdateForm() {
    this.updatingTask = !this.updatingTask;
    this.addingTask = false;
  }

}

