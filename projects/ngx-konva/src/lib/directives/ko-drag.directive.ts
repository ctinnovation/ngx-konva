import { Directive, EventEmitter, OnDestroy, OnInit, Optional, Output, Self } from '@angular/core';
import { KonvaEventObject } from 'konva/lib/Node';
import { KoShape } from '../common';
import { KoNestable, KoNestableNode } from '../common/ko-nestable';

@Directive({
  selector: '[koDrag]'
})
export class KoDragDirective implements OnInit, OnDestroy {
  @Output()
  koDragStart = new EventEmitter<KonvaEventObject<DragEvent>>();

  @Output()
  koDragMove = new EventEmitter<KonvaEventObject<DragEvent>>();

  @Output()
  koDragEnd = new EventEmitter<KonvaEventObject<DragEvent>>();

  private node: KoNestableNode;

  onDragStarterListener = this.onDragStart.bind(this);
  onDragEndListener = this.onDragEnd.bind(this);
  onDragMoveListener = this.onDragMove.bind(this);

  constructor(
    @Optional() @Self() nestable: KoNestable
  ) {
    if (!nestable) {
      throw new Error('koDrag attachable only to ko-nestable');
    }

    this.node = nestable.getKoItem() as KoShape;
    this.addListeners();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.node.off('dragstart', this.onDragStarterListener);
    this.node.off('dragend', this.onDragEndListener);
    this.node.off('dragmove', this.onDragMoveListener);
  }


  addListeners() {
    this.node.on('dragstart', this.onDragStarterListener);
    this.node.on('dragend', this.onDragEndListener);
    this.node.on('dragmove', this.onDragMoveListener);
  }

  onDragStart(event: KonvaEventObject<DragEvent>) {
    this.koDragStart.emit(event);
  }

  onDragEnd(event: KonvaEventObject<DragEvent>) {
    this.koDragEnd.emit(event);
  }

  onDragMove(event: KonvaEventObject<DragEvent>) {
    this.koDragMove.emit(event);
  }

}
