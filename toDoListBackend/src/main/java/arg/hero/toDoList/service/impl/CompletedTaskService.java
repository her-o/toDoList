package arg.hero.toDoList.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import arg.hero.toDoList.model.CompletedTask;
import arg.hero.toDoList.repository.CompletedTaskRepository;
import arg.hero.toDoList.service.ICompletedTaskService;

@Service
public class CompletedTaskService implements ICompletedTaskService {
	
	@Autowired
	private CompletedTaskRepository repository;
	
	@Override
	public CompletedTask addCompletedTask(CompletedTask completedTask) {
		return repository.save(completedTask);
	}

	@Override
	public List<CompletedTask> getAllCompletedTasks() {
		return repository.findAll();
	}

	@Override
	public Optional<CompletedTask> getCompletedTaskById(Long id) {
		return repository.findById(id);
	}

}
