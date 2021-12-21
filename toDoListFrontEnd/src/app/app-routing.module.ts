import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedTaskComponent } from './components/completed-task/completed-task.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';

const routes: Routes = [
  {path: '', component: TasksListComponent},
  {path: 'completedTasks', component: CompletedTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
