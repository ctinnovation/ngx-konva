import { Directive, EventEmitter, OnDestroy, OnInit, Optional, Output, Self } from '@angular/core';
import { KonvaEventObject } from 'konva/lib/Node';
import { KoShape } from '../common';
import { KoNestable, KoNestableNode } from '../common/ko-nestable';

@Directive({
  selector: '[koTransform]'
})
export class KoTransformDirective implements OnInit, OnDestroy {
  @Output()
  koTransformStart = new EventEmitter<KonvaEventObject<any>>();

  @Output()
  koTransform = new EventEmitter<KonvaEventObject<any>>();

  @Output()
  koTransformEnd = new EventEmitter<KonvaEventObject<any>>();

  private node: KoNestableNode;

  onTransformStarterListener = this.onTransformStart.bind(this);
  onTransformEndListener = this.onTransformEnd.bind(this);
  onTranformListener = this.onTransform.bind(this);

  constructor(
    @Optional() @Self() nestable: KoNestable
  ) {
    if (!nestable) {
      throw new Error('koTransform attachable only to ko-nestable');
    }

    this.node = nestable.getKoItem() as KoShape;
    this.addListeners();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.node.off('transformstart', this.onTransformStarterListener);
    this.node.off('transformend', this.onTransformEndListener);
    this.node.off('transform', this.onTranformListener);
  }


  addListeners() {
    this.node.on('transformstart', this.onTransformStarterListener);
    this.node.on('transformend', this.onTransformEndListener);
    this.node.on('transform', this.onTranformListener);
  }

  onTransformStart(event: KonvaEventObject<any>) {
    this.koTransformStart.emit(event);
  }

  onTransformEnd(event: KonvaEventObject<any>) {
    this.koTransformEnd.emit(event);
  }

  onTransform(event: KonvaEventObject<any>) {
    this.koTransform.emit(event);
  }

}
