import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  @Output() someEvent = new EventEmitter<string>();
  constructor() { }
  showMore: boolean;
  message: string;


  ngOnInit() {
    this.showMore = false;
    this.message = "More";
    $(".techWrapper").mousemove(function(event) {
      this.wrapperWidth = $(".techWrapper").width();
      this.wrapperHeight = $(".techWrapper").height();
      this.mouseXpercentage = Math.round(event.pageX / this.wrapperWidth * 100);
      console.log("posX: ", event.pageX);
      this.mouseYpercentage = Math.round(event.pageY / this.wrapperHeight * 100);
      console.log("posY: ", event.pageY);
      $(".techWrapper").css('background', 'radial-gradient(at ' + this.mouseXpercentage + '% ' + this.mouseYpercentage + '%, white, #5c5c5c)');
    })
  }
  callParent() {
      this.someEvent.next('portfolio');
  }

  showMoreBtn() {
      if(this.showMore == false) {
          this.showMore = true;
          this.message = "Less";
      } else {
          this.showMore = false;
          this.message = "More";
      }
  }

}
