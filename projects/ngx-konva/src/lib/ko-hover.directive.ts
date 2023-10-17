import { Directive, EventEmitter, OnDestroy, OnInit, Optional, Output, Self } from '@angular/core';
import { Subscription } from 'rxjs';
import { KoListenable } from './ko-listenable';
import { KoNestable, Shape } from './ko-nestable';

@Directive({
  selector: '[koHover]',
  outputs: ['koHoverStart', 'koHoverEnd']
})
export class KoHoverDirective implements OnInit, OnDestroy {
  @Output()
  koHoverStart = new EventEmitter<Shape>();

  @Output()
  koHoverEnd = new EventEmitter<Shape>();

  sub = new Subscription();
  hovering = false;

  private shape: Shape;

  onMouseEnterListener = this.onMouseEnter.bind(this);
  onMouseOutListener = this.onMouseOut.bind(this);

  constructor(
    @Optional() @Self() component: KoListenable,
    @Optional() @Self() nestable: KoNestable
  ) {
    if (!component || !nestable) {
      throw new Error('koHover attachable only to ko-shape');
    }

    this.shape = nestable.getKoItem() as Shape;
    this.addListeners();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();

    if (this.shape) {
      this.shape.off('mouseenter', this.onMouseEnterListener);
      this.shape.off('mouseout', this.onMouseOutListener);
    }
  }


  addListeners() {
    if (!this.shape) {
      return;
    }

    this.shape.on('mouseenter', this.onMouseEnterListener);
    this.shape.on('mouseout', this.onMouseOutListener);
  }

  onMouseEnter() {
    this.hovering = true;
    console.log('mouse enter')
    this.koHoverStart.emit(this.shape!);
  }

  onMouseOut() {
    if (this.hovering) {
      console.log('mouse leave')
      this.koHoverEnd.emit(this.shape!);
    }

    this.hovering = false;
  }

}
