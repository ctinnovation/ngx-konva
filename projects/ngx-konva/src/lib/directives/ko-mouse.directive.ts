import { Directive, EventEmitter, OnDestroy, OnInit, Optional, Output, Self } from '@angular/core';
import { KonvaEventObject } from 'konva/lib/Node';
import { Subscription } from 'rxjs';
import { KoNestable, KoNestableNode } from '../common/ko-nestable';
import { KoStageComponent } from '../components/ko-stage.component';

@Directive({
  selector: '[koMouse]'
})
export class KoMouseDirective implements OnInit, OnDestroy {
  @Output()
  koMouseDown = new EventEmitter<KonvaEventObject<MouseEvent>>();

  @Output()
  koMouseMove = new EventEmitter<KonvaEventObject<MouseEvent>>();

  @Output()
  koMouseUp = new EventEmitter<KonvaEventObject<MouseEvent>>();

  @Output()
  koMouseLeave = new EventEmitter<KonvaEventObject<MouseEvent>>();

  @Output()
  koMouseOver = new EventEmitter<KonvaEventObject<MouseEvent>>();

  @Output()
  koMouseEnter = new EventEmitter<KonvaEventObject<MouseEvent>>();

  @Output()
  koMouseWheel = new EventEmitter<KonvaEventObject<MouseEvent>>();

  @Output()
  koMouseOut = new EventEmitter<KonvaEventObject<MouseEvent>>();

  @Output()
  koClick = new EventEmitter<KonvaEventObject<MouseEvent>>();

  @Output()
  koDblclick = new EventEmitter<KonvaEventObject<MouseEvent>>();

  sub = new Subscription();
  hovering = false;

  private node: KoNestableNode;

  onMouseDownListener = this.onMouseDown.bind(this);
  onMouseMoveListener = this.onMouseMove.bind(this);
  onMouseUpListener = this.onMouseUp.bind(this);
  onMouseLeaveListener = this.onMouseLeave.bind(this);
  onMouseOverListener = this.onMouseOver.bind(this);
  onMouseEnterListener = this.onMouseEnter.bind(this);
  onMouseOutListener = this.onMouseOut.bind(this);
  onMouseWheelListener = this.onMouseWheel.bind(this);
  onClickListener = this.onClick.bind(this);
  onDblclickListener = this.onDblclick.bind(this);


  constructor(
    @Optional() @Self() nestable: KoNestable,
    @Optional() @Self() stage: KoStageComponent,
  ) {
    if (!nestable && !stage) {
      throw new Error('koMouse attachable only to ko-shape or ko-stage');
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
      this.node.off('mousedown', this.onMouseDownListener);
      this.node.off('mousemove', this.onMouseMoveListener);
      this.node.off('mouseup', this.onMouseUpListener);
      this.node.off('mouseover', this.onMouseOverListener);
      this.node.off('mouseenter', this.onMouseEnterListener);
      this.node.off('mouseout', this.onMouseOutListener);
      this.node.off('mouseleave', this.onMouseLeaveListener);
      this.node.off('wheel', this.onMouseWheelListener);
      this.node.off('click', this.onClickListener);
      this.node.off('dblclick', this.onDblclickListener);
    }
  }


  addListeners() {
    if (!this.node) {
      return;
    }

    this.node.on('mousedown', this.onMouseDownListener);
    this.node.on('mousemove', this.onMouseMoveListener);
    this.node.on('mouseup', this.onMouseUpListener);
    this.node.on('mouseover', this.onMouseOverListener);
    this.node.on('mouseenter', this.onMouseEnterListener);
    this.node.on('mouseout', this.onMouseOutListener);
    this.node.on('wheel', this.onMouseWheelListener);
    this.node.on('mouseleave', this.onMouseLeaveListener);
    this.node.on('click', this.onClickListener);
    this.node.on('dblclick', this.onDblclickListener);
  }

  onMouseWheel(event: KonvaEventObject<MouseEvent>) {
    this.koMouseWheel.emit(event);
  }

  onMouseDown(event: KonvaEventObject<MouseEvent>) {
    this.koMouseDown.emit(event);
  }

  onMouseMove(event: KonvaEventObject<MouseEvent>) {
    this.koMouseMove.emit(event);
  }

  onMouseUp(event: KonvaEventObject<MouseEvent>) {
    this.koMouseUp.emit(event);
  }

  onMouseOver(event: KonvaEventObject<MouseEvent>) {
    this.koMouseOver.emit(event);
  }

  onMouseEnter(event: KonvaEventObject<MouseEvent>) {
    this.koMouseEnter.emit(event);
  }

  onMouseOut(event: KonvaEventObject<MouseEvent>) {
    this.koMouseOut.emit(event);
  }

  onMouseLeave(event: KonvaEventObject<MouseEvent>) {
    this.koMouseLeave.emit(event);
  }

  onClick(event: KonvaEventObject<MouseEvent>) {
    this.koClick.emit(event);
  }

  onDblclick(event: KonvaEventObject<MouseEvent>) {
    this.koDblclick.emit(event);
  }

}
