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

  onScroll($event: any): void {
    this.setWidth();

  }

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

    return document.body.scrollHeight - window.innerHeight;

  }

  getValue(): number {
    return window.scrollY;
  }

  getWidth(): number {
    let max = this.getMax();
    let scrollValue = this.getValue();
    let width = (scrollValue / max) * 100;
    return width;
  }

}

