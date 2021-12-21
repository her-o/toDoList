package arg.hero.toDoList.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import arg.hero.toDoList.model.CompletedTask;

@Repository
public interface CompletedTaskRepository extends JpaRepository<CompletedTask, Long>{

}
