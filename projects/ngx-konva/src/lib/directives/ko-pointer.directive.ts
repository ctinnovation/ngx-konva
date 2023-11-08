import { Directive, EventEmitter, OnDestroy, OnInit, Optional, Output, Self } from '@angular/core';
import { Subscription } from 'rxjs';
import { KoNestable, KoNestableNode } from '../common/ko-nestable';
import { KoStageComponent } from '../components/ko-stage.component';

@Directive({
  selector: '[koPointer]'
})
export class KoPointerDirective implements OnInit, OnDestroy {
  @Output()
  koPointerDown = new EventEmitter<KoNestableNode>();

  @Output()
  koPointerMove = new EventEmitter<KoNestableNode>();

  @Output()
  koPointerUp = new EventEmitter<KoNestableNode>();

  @Output()
  koPointerCancel = new EventEmitter<KoNestableNode>();

  @Output()
  koPointerOver = new EventEmitter<KoNestableNode>();

  @Output()
  koPointerEnter = new EventEmitter<KoNestableNode>();

  @Output()
  koPointerOut = new EventEmitter<KoNestableNode>();

  @Output()
  koPointerLeave = new EventEmitter<KoNestableNode>();

  @Output()
  koPointerClick = new EventEmitter<KoNestableNode>();

  @Output()
  koPointerDblClick = new EventEmitter<KoNestableNode>();

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

  onPointerDown() {
    this.koPointerDown.emit(this.node);
  }

  onPointerMove() {
    this.koPointerMove.emit(this.node);
  }

  onPointerUp() {
    this.koPointerUp.emit(this.node);
  }

  onPointerCancel() {
    this.koPointerCancel.emit(this.node);
  }

  onPointerOver() {
    this.koPointerOver.emit(this.node);
  }

  onPointerEnter() {
    this.koPointerEnter.emit(this.node);
  }

  onPointerOut() {
    this.koPointerOut.emit(this.node);
  }

  onPointerLeave() {
    this.koPointerLeave.emit(this.node);
  }

  onPointerClick() {
    this.koPointerClick.emit(this.node);
  }

  onPointerDblClick() {
    this.koPointerDblClick.emit(this.node);
  }

}
