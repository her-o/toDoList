package arg.hero.toDoList.service.impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import arg.hero.toDoList.model.Task;
import arg.hero.toDoList.repository.TaskRepository;
import arg.hero.toDoList.service.ITaskService;

@Service
@Transactional
public class TaskService implements ITaskService {
	
	@Autowired
	private TaskRepository repository;
	
	@Override
	public Task addTask(Task task) {
		return repository.save(task);
	}
	
	@Override
	public List<Task> getAllTasks() {
		return repository.findAll();
	}

	@Override
	public Optional<Task> getTaskById(Long id) {
		return repository.findById(id);
	}

	
	@Override
	public Task updateTaskById(Long id, Task updatedTask) {
		Task task = repository.getById(id);
		task.setText(updatedTask.getText());
		return repository.save(task);
	}

	@Override
	public void deleteTaskById(Long id) {
		repository.deleteById(id);
	}

	@Override
	public void deleteAllTasks() {
		 repository.deleteAll();
	}

}
