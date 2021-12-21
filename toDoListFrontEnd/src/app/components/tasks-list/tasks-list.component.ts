import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompletedTask } from 'src/app/model/completed-task';
import { Task } from 'src/app/model/task';
import { CompletedTaskService } from 'src/app/services/completed-task.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks!: Task[];
  addingTask:boolean = false;
  text: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  defaultText!:string;

  constructor(private service:TaskService, 
              private completedTaskService: CompletedTaskService, 
              private router: Router) {

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

  toggleUpdateForm(id: number) {

    this.addingTask = false;

    for(let task in this.tasks) {
      let taskToEdit = this.tasks[task];
        if(taskToEdit.id == id) {
          taskToEdit.isEditable = !taskToEdit.isEditable;
          this.defaultText = taskToEdit.text;
        } else {
          taskToEdit.isEditable = false;
        }
      }
    }

    setStatus(id:number){

      for(let task in this.tasks) {
        let taskToEdit = this.tasks[task];

          if(taskToEdit.id == id) {
            taskToEdit.completed = !taskToEdit.completed;
          } 
        }
    }

    clearFinishedTasks() {

      for(let task in this.tasks) {
        if(this.tasks[task].completed) {
          const completedTask = this.buildCompletedTask(this.tasks[task]);
          this.completedTaskService.addCompletedTask(completedTask).subscribe({
            next:(data) => console.log("Completed Task successfully added!"),
            error: (error) => console.log(error)
          });

          this.deleteTask(this.tasks[task].id);

        }
        this.getAllTasks();
      }
    }

    buildCompletedTask(task:Task):CompletedTask {
          let text = task.text;
          let date = new Date().toLocaleDateString("en-US");
          return new CompletedTask(text, date);
    }

}
