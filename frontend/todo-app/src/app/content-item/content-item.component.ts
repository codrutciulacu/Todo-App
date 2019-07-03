import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.css']
})
export class ContentItemComponent implements OnInit {

  private todos: Todo[];

  constructor(private todoService: ContentService) { }

  ngOnInit() {
    this.todoService.getAll().subscribe(arr => {
      this.todos = [...arr];
    });

  }

  updateOnServer(id){
    this.todoService.done(id).subscribe(res => {
      window.location.reload();
    });
  }

}
