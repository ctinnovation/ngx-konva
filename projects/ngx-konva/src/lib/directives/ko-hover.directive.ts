import { Directive, EventEmitter, OnDestroy, OnInit, Optional, Output, Self, forwardRef } from '@angular/core';
import { KoShape } from '../common';
import { KoListeningDirective } from '../common/ko-listening';
import { KoNestable, KoNestableNode } from '../common/ko-nestable';

@Directive({
  selector: '[koHover]',
  outputs: ['koHoverStart', 'koHoverEnd'],
  providers: [{
    provide: KoListeningDirective,
    useValue: forwardRef(() => KoHoverDirective)
  }],
})
export class KoHoverDirective implements OnInit, OnDestroy {
  @Output()
  koHoverStart = new EventEmitter<KoNestableNode>();

  @Output()
  koHoverEnd = new EventEmitter<KoNestableNode>();

  hovering = false;

  private node: KoNestableNode;

  onMouseEnterListener = this.onMouseEnter.bind(this);
  onMouseOutListener = this.onMouseOut.bind(this);

  constructor(
    @Optional() @Self() nestable: KoNestable
  ) {
    if (!nestable) {
      throw new Error('koHover attachable only to ko-nestable');
    }

    this.node = nestable.getKoItem() as KoShape;
    this.addListeners();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.node.off('mouseenter', this.onMouseEnterListener);
    this.node.off('mouseout', this.onMouseOutListener);
  }


  addListeners() {
    this.node.on('mouseenter', this.onMouseEnterListener);
    this.node.on('mouseout', this.onMouseOutListener);
  }

  onMouseEnter() {
    this.hovering = true;
    this.koHoverStart.emit(this.node!);
  }

  onMouseOut() {
    if (this.hovering) {
      this.koHoverEnd.emit(this.node!);
    }

    this.hovering = false;
  }

}
