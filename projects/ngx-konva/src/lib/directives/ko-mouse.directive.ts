import { Directive, EventEmitter, OnDestroy, OnInit, Optional, Output, Self } from '@angular/core';
import { Subscription } from 'rxjs';
import { KoNestable, KoNestableNode } from '../common/ko-nestable';
import { KoStageComponent } from '../components/ko-stage.component';

@Directive({
  selector: '[koMouse]'
})
export class KoMouseDirective implements OnInit, OnDestroy {
  @Output()
  koMouseDown = new EventEmitter<KoNestableNode>();

  @Output()
  koMouseMove = new EventEmitter<KoNestableNode>();

  @Output()
  koMouseUp = new EventEmitter<KoNestableNode>();

  @Output()
  koMouseLeave = new EventEmitter<KoNestableNode>();

  @Output()
  koMouseOver = new EventEmitter<KoNestableNode>();

  @Output()
  koMouseEnter = new EventEmitter<KoNestableNode>();

  @Output()
  koMouseWheel = new EventEmitter<KoNestableNode>();

  @Output()
  koMouseOut = new EventEmitter<KoNestableNode>();

  @Output()
  koClick = new EventEmitter<KoNestableNode>();

  @Output()
  koDblclick = new EventEmitter<KoNestableNode>();

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

  onMouseWheel() {
    this.koMouseWheel.emit(this.node);
  }

  onMouseDown() {
    this.koMouseDown.emit(this.node);
  }

  onMouseMove() {
    this.koMouseMove.emit(this.node);
  }

  onMouseUp() {
    this.koMouseUp.emit(this.node);
  }

  onMouseOver() {
    this.koMouseOver.emit(this.node);
  }

  onMouseEnter() {
    this.koMouseEnter.emit(this.node);
  }

  onMouseOut() {
    this.koMouseOut.emit(this.node);
  }

  onMouseLeave() {
    this.koMouseLeave.emit(this.node);
  }

  onClick() {
    this.koClick.emit(this.node);
  }

  onDblclick() {
    this.koDblclick.emit(this.node);
  }

}
