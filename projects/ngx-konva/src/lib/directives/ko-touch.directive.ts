import { Directive, EventEmitter, OnDestroy, OnInit, Optional, Output, Self, forwardRef } from '@angular/core';
import { KonvaEventObject } from 'konva/lib/Node';
import { Subscription } from 'rxjs';
import { KoListeningDirective } from '../common/ko-listening';
import { KoNestable, KoNestableNode } from '../common/ko-nestable';
import { KoStageComponent } from '../components/ko-stage.component';

@Directive({
  selector: '[koTouch]',
  providers: [{
    provide: KoListeningDirective,
    useValue: forwardRef(() => KoTouchDirective)
  }],
})
export class KoTouchDirective implements OnInit, OnDestroy {
  @Output()
  koTouchStart = new EventEmitter<KonvaEventObject<TouchEvent>>();

  @Output()
  koTouchMove = new EventEmitter<KonvaEventObject<TouchEvent>>();

  @Output()
  koTouchEnd = new EventEmitter<KonvaEventObject<TouchEvent>>();

  @Output()
  koTouchTap = new EventEmitter<KonvaEventObject<TouchEvent>>();

  @Output()
  koTouchDblTap = new EventEmitter<KonvaEventObject<TouchEvent>>();

  sub = new Subscription();
  hovering = false;

  private node: KoNestableNode;

  onTouchStartListener = this.onTouchStart.bind(this);
  onTouchMoveListener = this.onTouchMove.bind(this);
  onTouchEndListener = this.onTouchEnd.bind(this);
  onTouchTapListener = this.onTouchTap.bind(this);
  onTouchDblTapListener = this.onTouchDblTap.bind(this);


  constructor(
    @Optional() @Self() nestable: KoNestable,
    @Optional() @Self() stage: KoStageComponent,
  ) {
    if (!nestable && !stage) {
      throw new Error('koTouch attachable only to ko-shape or ko-stage');
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
      this.node.off('touchstart', this.onTouchStartListener);
      this.node.off('touchmove', this.onTouchMoveListener);
      this.node.off('touchend', this.onTouchEndListener);
      this.node.off('tap', this.onTouchTapListener);
      this.node.off('dbltap', this.onTouchDblTapListener);
    }
  }


  addListeners() {
    if (!this.node) {
      return;
    }
    this.node.on('touchstart', this.onTouchStartListener);
    this.node.on('touchmove', this.onTouchMoveListener);
    this.node.on('touchend', this.onTouchEndListener);
    this.node.on('tap', this.onTouchTapListener);
    this.node.on('dbltap', this.onTouchDblTapListener);
  }

  onTouchStart(event: KonvaEventObject<TouchEvent>) {
    this.koTouchStart.emit(event);
  }

  onTouchMove(event: KonvaEventObject<TouchEvent>) {
    this.koTouchMove.emit(event);
  }

  onTouchEnd(event: KonvaEventObject<TouchEvent>) {
    this.koTouchEnd.emit(event);
  }

  onTouchTap(event: KonvaEventObject<TouchEvent>) {
    this.koTouchTap.emit(event);
  }

  onTouchDblTap(event: KonvaEventObject<TouchEvent>) {
    this.koTouchDblTap.emit(event);
  }

}
