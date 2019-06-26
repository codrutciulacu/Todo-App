package com.codrut.todoapp.repositories;

import com.codrut.todoapp.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {

    Optional<Todo> findByTask(String task);

    @Query("SELECT t FROM todo t WHERE t.checked = true")
    List<Todo> findAllDoneTasks();

}
