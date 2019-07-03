import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-main-box',
  templateUrl: './main-box.component.html',
  styleUrls: ['./main-box.component.css']
})
export class MainBoxComponent implements OnInit {

  inputValue = new FormControl();

  constructor(private todoService: ContentService) { }

  ngOnInit() {
  }

  addItem(){
    this.todoService.add(this.inputValue.value).subscribe(res => {
      window.location.reload();
    });
  }

}
