import {Component, OnInit, HostListener, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'scroll-spy',
  templateUrl: './scroll-spy.component.html',
  styleUrls:['./scroll-spy.component.css'],
  host: {
    '(document:scroll)': 'onScroll($event)'

  },

})

export class ScrollSpyComponent implements OnInit {
    /*@HostListener('document:scroll',['$event'])*/
  @Input()
  progressColor: string = '#40aa94';
  private scrollSpyWidth: string = "0%";

  //event handle for scroll
  onScroll($event: any): void {
    this.setWidth();

  }

  //set the width of progress bar
  setWidth(): void {
    this.scrollSpyWidth = "0%";
    if (this.getWidth() > 0) {
      this.scrollSpyWidth = this.getWidth() + "%";
    }
  }

  ngOnInit(): void {

    this.setWidth();

  }

  getMax(): number {
    // Get document height - viewport's innerHeight
    return document.body.scrollHeight - window.innerHeight;
  }

  //total scroll on vertical scroll-bar
  getValue(): number {
    return window.scrollY;
  }

  //calculate width based on current scroll
  getWidth(): number {
    let max = this.getMax();
    let scrollValue = this.getValue();
    let width = (scrollValue / max) * 100;
    return width;
  }

}

