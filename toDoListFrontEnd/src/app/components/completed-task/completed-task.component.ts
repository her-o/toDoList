import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompletedTask } from 'src/app/model/completed-task';
import { CompletedTaskService } from 'src/app/services/completed-task.service';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.css']
})
export class CompletedTaskComponent implements OnInit {

  completedTasks!:CompletedTask[];

  constructor(private service: CompletedTaskService, private router:Router) { }

  ngOnInit(): void {

    this.getAllCompletedTasks();

  }

  getAllCompletedTasks() {
    this.service.getAllCompletedTasks().subscribe({
      next:(data) => this.completedTasks = data,
      error:(error) => console.log(error)
    });
  }
}
