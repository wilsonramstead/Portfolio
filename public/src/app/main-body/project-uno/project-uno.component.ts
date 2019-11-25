import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-uno',
  templateUrl: './project-uno.component.html',
  styleUrls: ['./project-uno.component.css']
})
export class ProjectUnoComponent implements OnInit {

  constructor() { }
  showTech: any;

  ngOnInit() {
    this.showTech = false;
  }

  swap(bool) {
    this.showTech = bool;
  }

}
