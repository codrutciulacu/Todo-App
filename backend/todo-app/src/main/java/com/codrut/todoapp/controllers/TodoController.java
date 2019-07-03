package com.codrut.todoapp.controllers;


import com.codrut.todoapp.controllers.payload.request.TodoRequest;
import com.codrut.todoapp.controllers.payload.response.TodoResponse;
import com.codrut.todoapp.exceptions.NoTodoFoundException;
import com.codrut.todoapp.models.Todo;
import com.codrut.todoapp.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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

    @PostMapping("/add")
    public ResponseEntity<TodoResponse> addNewTask(@Valid @RequestBody TodoRequest request){
        Todo newItem = new Todo(request.getTask());

        mTodoRepository.save(newItem);

        return ResponseEntity.ok(new TodoResponse("The task has been created successfully!"));
    }

    @GetMapping("/done/{id}")
    public ResponseEntity<TodoResponse> checkAsDone(@PathVariable Long id){
        Todo newTodo = mTodoRepository.findById(id)
                .orElseThrow(() -> new NoTodoFoundException("No Todo with id: " + id + " was found!"));;
        newTodo.setChecked(!newTodo.getChecked());
        mTodoRepository.save(newTodo);

        return ResponseEntity.ok(new TodoResponse("The task has been marked up as done!"));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<TodoResponse> removeItemFromList(@PathVariable Long id){
        mTodoRepository.deleteById(id);     

        return ResponseEntity.ok(new TodoResponse("The item has been removed!"));
    }

}
