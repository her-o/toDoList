package arg.hero.toDoList.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import arg.hero.toDoList.model.Task;
import arg.hero.toDoList.service.impl.TaskService;

@RestController
@RequestMapping("/api/v1")
public class TaskController {
	
	@Autowired
	private TaskService service;
	
	@PostMapping("/tasks/addTask")
	public Task addTask(@RequestBody Task task) {
		return service.addTask(task);
	}
	
	@GetMapping("/tasks")
	public List<Task> getTasks() {
		return service.getAllTasks();
	}
	
	@GetMapping("/tasks/{id}")
	public Optional<Task> getTaskById(@PathVariable("id") Long id) {
		return service.getTaskById(id);
	}
	
	@PutMapping("/tasks/{id}")
	public Task updateTask(@PathVariable("id") Long id, @RequestBody Task updatedTask) {
		return service.updateTaskById(id, updatedTask);
	}
	
	@DeleteMapping("/tasks/{id}")
	public void deleteTask(@PathVariable("id") Long id) {
		service.deleteTaskById(id);
	}
	
	@DeleteMapping("/tasks")
	public void deleteAllTasks() {
		service.deleteAllTasks();
	}
	
	

}
