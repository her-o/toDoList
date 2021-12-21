package arg.hero.toDoList.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import arg.hero.toDoList.model.CompletedTask;
import arg.hero.toDoList.model.Task;
import arg.hero.toDoList.service.impl.CompletedTaskService;
import arg.hero.toDoList.service.impl.TaskService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class TaskController {
	
	@Autowired
	private TaskService taskService;
	@Autowired
	private CompletedTaskService completedTaskService;
	
	@PostMapping("/tasks/addTask")
	public Task addTask(@RequestBody Task task) {
		return taskService.addTask(task);
	}
	
	@GetMapping("/tasks")
	public List<Task> getTasks() {
		return taskService.getAllTasks();
	}
	
	@GetMapping("/tasks/{id}")
	public Optional<Task> getTaskById(@PathVariable("id") Long id) {
		return taskService.getTaskById(id);
	}
	
	@PutMapping("/tasks/{id}")
	public Task updateTask(@PathVariable("id") Long id, @RequestBody Task updatedTask) {
		return taskService.updateTaskById(id, updatedTask);
	}
	
	@DeleteMapping("/tasks/{id}")
	public void deleteTask(@PathVariable("id") Long id) {
		taskService.deleteTaskById(id);
	}
	
	@DeleteMapping("/tasks")
	public void deleteAllTasks() {
		taskService.deleteAllTasks();
	}
	
	@PostMapping("/completedTasks/addCompletedTask")
	public CompletedTask addCompletedTask(@RequestBody CompletedTask completedTask) {
		return completedTaskService.addCompletedTask(completedTask);
	}
	
	@GetMapping("/completedTasks")
	public List<CompletedTask> getCompletedTasks() {
		return completedTaskService.getAllCompletedTasks();
	}
	
	@GetMapping("/completedTasks/{id}")
	public Optional<CompletedTask> getCompletedTaskById(@PathVariable("id") Long id) {
		return completedTaskService.getCompletedTaskById(id);
	}

}
