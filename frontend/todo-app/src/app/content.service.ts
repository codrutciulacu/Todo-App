import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './models/Todo';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { Observable } from 'rxjs';

const urlContent = "http://localhost:8080/api/todo";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]>{
    return this.http.get<Todo[]>(urlContent + "/getAll");
  }

  getById(id: Number): Observable<Todo>{
    return this.http.get<Todo>(urlContent + `/getById/${id}`);
  }

  getByName(task: String){
    return this.http.get<Todo>(urlContent + `/getById/${task}`);
  }

  add(taskName: String){
    let newTask = {
      task: taskName
    };

    return this.http.post(urlContent + '/add', newTask);
  }

  done(id: Number){
    return this.http.get<String>(urlContent + `/done/${id}`);
  }
}
