package arg.hero.toDoList.service;

import java.util.List;
import java.util.Optional;

import arg.hero.toDoList.model.CompletedTask;

public interface ICompletedTaskService {
	
	CompletedTask addCompletedTask(CompletedTask completedTask);
	List<CompletedTask> getAllCompletedTasks();
	Optional<CompletedTask> getCompletedTaskById(Long id);

}
