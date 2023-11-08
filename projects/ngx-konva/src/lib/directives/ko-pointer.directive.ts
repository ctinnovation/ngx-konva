import { Directive, EventEmitter, OnDestroy, OnInit, Optional, Output, Self } from '@angular/core';
import { KonvaEventObject } from 'konva/lib/Node';
import { Subscription } from 'rxjs';
import { KoNestable, KoNestableNode } from '../common/ko-nestable';
import { KoStageComponent } from '../components/ko-stage.component';

@Directive({
  selector: '[koPointer]'
})
export class KoPointerDirective implements OnInit, OnDestroy {
  @Output()
  koPointerDown = new EventEmitter<KonvaEventObject<PointerEvent>>();

  @Output()
  koPointerMove = new EventEmitter<KonvaEventObject<PointerEvent>>();

  @Output()
  koPointerUp = new EventEmitter<KonvaEventObject<PointerEvent>>();

  @Output()
  koPointerCancel = new EventEmitter<KonvaEventObject<PointerEvent>>();

  @Output()
  koPointerOver = new EventEmitter<KonvaEventObject<PointerEvent>>();

  @Output()
  koPointerEnter = new EventEmitter<KonvaEventObject<PointerEvent>>();

  @Output()
  koPointerOut = new EventEmitter<KonvaEventObject<PointerEvent>>();

  @Output()
  koPointerLeave = new EventEmitter<KonvaEventObject<PointerEvent>>();

  @Output()
  koPointerClick = new EventEmitter<KonvaEventObject<PointerEvent>>();

  @Output()
  koPointerDblClick = new EventEmitter<KonvaEventObject<PointerEvent>>();

  sub = new Subscription();
  hovering = false;

  private node: KoNestableNode;

  onPointerDownListener = this.onPointerDown.bind(this);
  onPointerMoveListener = this.onPointerMove.bind(this);
  onPointerUpListener = this.onPointerUp.bind(this);
  onPointerCancelListener = this.onPointerCancel.bind(this);
  onPointerOverListener = this.onPointerOver.bind(this);
  onPointerEnterListener = this.onPointerEnter.bind(this);
  onPointerOutListener = this.onPointerOut.bind(this);
  onPointerLeaveListener = this.onPointerLeave.bind(this);
  onPointerClickListener = this.onPointerClick.bind(this);
  onPointerDblClickListener = this.onPointerDblClick.bind(this);


  constructor(
    @Optional() @Self() nestable: KoNestable,
    @Optional() @Self() stage: KoStageComponent,
  ) {
    if (!nestable && !stage) {
      throw new Error('koPointer attachable only to ko-shape or ko-stage');
    }

    this.node = (nestable && nestable.getKoItem()) ||
      (stage && stage.stage);
    this.addListeners();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();

    if (this.node) {
      this.node.off('pointerdown', this.onPointerDownListener);
      this.node.off('pointermove', this.onPointerMoveListener);
      this.node.off('pointerup', this.onPointerUpListener);
      this.node.off('pointercancel', this.onPointerCancelListener);
      this.node.off('pointerover', this.onPointerOverListener);
      this.node.off('pointerenter', this.onPointerEnterListener);
      this.node.off('pointerout', this.onPointerOutListener);
      this.node.off('pointerleave', this.onPointerLeaveListener);
      this.node.off('pointerclick', this.onPointerClickListener);
      this.node.off('pointerdblclick', this.onPointerDblClickListener);
    }
  }


  addListeners() {
    if (!this.node) {
      return;
    }

    this.node.on('pointerdown', this.onPointerDownListener);
    this.node.on('pointermove', this.onPointerMoveListener);
    this.node.on('pointerup', this.onPointerUpListener);
    this.node.on('pointercancel', this.onPointerCancelListener);
    this.node.on('pointerover', this.onPointerOverListener);
    this.node.on('pointerenter', this.onPointerEnterListener);
    this.node.on('pointerout', this.onPointerOutListener);
    this.node.on('pointerleave', this.onPointerLeaveListener);
    this.node.on('pointerclick', this.onPointerClickListener);
    this.node.on('pointerdblclick', this.onPointerDblClickListener);
  }

  onPointerDown(event: KonvaEventObject<PointerEvent>) {
    this.koPointerDown.emit(event);
  }

  onPointerMove(event: KonvaEventObject<PointerEvent>) {
    this.koPointerMove.emit(event);
  }

  onPointerUp(event: KonvaEventObject<PointerEvent>) {
    this.koPointerUp.emit(event);
  }

  onPointerCancel(event: KonvaEventObject<PointerEvent>) {
    this.koPointerCancel.emit(event);
  }

  onPointerOver(event: KonvaEventObject<PointerEvent>) {
    this.koPointerOver.emit(event);
  }

  onPointerEnter(event: KonvaEventObject<PointerEvent>) {
    this.koPointerEnter.emit(event);
  }

  onPointerOut(event: KonvaEventObject<PointerEvent>) {
    this.koPointerOut.emit(event);
  }

  onPointerLeave(event: KonvaEventObject<PointerEvent>) {
    this.koPointerLeave.emit(event);
  }

  onPointerClick(event: KonvaEventObject<PointerEvent>) {
    this.koPointerClick.emit(event);
  }

  onPointerDblClick(event: KonvaEventObject<PointerEvent>) {
    this.koPointerDblClick.emit(event);
  }

}
