import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.css']
})
export class ContentItemComponent implements OnInit {

  number = [1, 2, 3, 4, 5]

  constructor() { }

  ngOnInit() {
  }

}
