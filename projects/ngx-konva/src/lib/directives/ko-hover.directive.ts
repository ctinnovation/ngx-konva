import { Directive, EventEmitter, OnDestroy, OnInit, Optional, Output, Self } from '@angular/core';
import { Subscription } from 'rxjs';
import { KoShape } from '../common';
import { KoNestable } from '../common/ko-nestable';

@Directive({
  selector: '[koHover]',
  outputs: ['koHoverStart', 'koHoverEnd']
})
export class KoHoverDirective implements OnInit, OnDestroy {
  @Output()
  koHoverStart = new EventEmitter<KoShape>();

  @Output()
  koHoverEnd = new EventEmitter<KoShape>();

  sub = new Subscription();
  hovering = false;

  private shape: KoShape;

  onMouseEnterListener = this.onMouseEnter.bind(this);
  onMouseOutListener = this.onMouseOut.bind(this);

  constructor(
    @Optional() @Self() nestable: KoNestable
  ) {
    if (!nestable) {
      throw new Error('koHover attachable only to ko-shape');
    }

    this.shape = nestable.getKoItem() as KoShape;
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
