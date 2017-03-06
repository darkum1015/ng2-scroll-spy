import {Component, OnInit, HostListener, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'scroll-spy',
  template: `<div class="scroll-spy">
<div [style.width]="scrollSpyWidth" [style.background-color]="progressColor" class="progress"></div>
</div>`,
  host: {
    '(document:scroll)': 'onScroll($event)'

  },
  styles: [`
.scroll-spy{
    height: 10px;
    width: 100%;
}
.scroll-spy > .progress{
 
  height: inherit;
  position: fixed;
  z-index: 1;
}`]
})

export class ScrollSpyComponent implements OnInit {
  /*@HostListener('document:scroll',['$event'])*/
  private scrollSpyWidth: string = "0%";


@Input()
  progressColor: string = 'red';
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

