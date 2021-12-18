package arg.hero.toDoList.service;

import java.util.List;
import java.util.Optional;

import arg.hero.toDoList.model.Task;

public interface ITaskService {
	
	Task addTask(Task task);
	List<Task> getAllTasks();
	Optional<Task> getTaskById(Long id);
	Task updateTaskById(Long id, Task task);
	void deleteTaskById(Long id);
	void deleteAllTasks();
	
}
