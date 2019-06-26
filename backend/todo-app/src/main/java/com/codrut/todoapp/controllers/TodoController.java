package com.codrut.todoapp.controllers;


import com.codrut.todoapp.exceptions.NoTodoFoundException;
import com.codrut.todoapp.models.Todo;
import com.codrut.todoapp.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todo")
public class TodoController {

    @Autowired
    private TodoRepository mTodoRepository;

    @GetMapping("/getAll")
    public List<Todo> getAllTasks(){
        return mTodoRepository.findAll();
    }

    @GetMapping("/getById/{id}")
    public Todo getTodoById(@PathVariable Long id){
        return mTodoRepository.findById(id)
                .orElseThrow(() -> new NoTodoFoundException("No Todo with id: " + id + " was found!"));
    }

    @GetMapping("/getByName/{name}")
    public Todo getTodoByName(@PathVariable String name){
        return mTodoRepository.findByTask(name)
                .orElseThrow(() -> new NoTodoFoundException("No Todo with name: " + name + " was found!"));
    }

    @GetMapping("/getAllDoneTasks")
    public List<Todo> getAllDoneTasks(){
        return mTodoRepository.findAllDoneTasks();
    }

    public ResponseEntity<String> addNewTask(@RequestBody String name){
        Todo newItem = new Todo(name);

        mTodoRepository.save(newItem);
        
        return ResponseEntity.ok("The task has been created successfully!");
    }

    @PutMapping("/getByName/{id}")
    public ResponseEntity<String> checkAsDone(@PathVariable Long id){
        Todo newTodo = mTodoRepository.findById(id)
                .orElseThrow(() -> new NoTodoFoundException("No Todo with id: " + id + " was found!"));;
        newTodo.setChecked(true);
        mTodoRepository.save(newTodo);

        return ResponseEntity.ok("The task has been marked up as done!");
    }

    @DeleteMapping("/getByName/{id}")
    public ResponseEntity<String> removeItemFromList(@PathVariable Long id){
        mTodoRepository.deleteById(id);

        return ResponseEntity.ok("The item has been removed!");
    }

}
