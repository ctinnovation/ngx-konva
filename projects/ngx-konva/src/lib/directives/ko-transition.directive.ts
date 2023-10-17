import { Directive, Input, OnDestroy, OnInit, Optional, Self } from '@angular/core';
import { Tween, TweenConfig } from 'konva/lib/Tween';
import { isEqual } from 'lodash';
import { Subscription } from 'rxjs';
import { KoShape } from '../common';
import { KoNestable, KoNestableNode } from '../common/ko-nestable';
import { KoLayerComponent } from '../components/ko-layer.component';

@Directive({
  selector: '[koTransition]'
})
export class KoTransitionDirective implements OnInit, OnDestroy {
  _tween: Tween | null = null;
  _currentTransition: Omit<TweenConfig, 'node'> | null = null;

  @Input()
  set koTransition(t: Omit<TweenConfig, 'node'>) {
    if (isEqual(this._currentTransition, t)) {
      return;
    }

    if (this._tween) {
      this._tween.destroy();
    }

    this._currentTransition = t;
    this.tryPlay();
  };

  sub = new Subscription();

  private node: KoNestableNode;

  constructor(
    @Optional() @Self() nestable: KoNestable,
    private layer: KoLayerComponent
  ) {
    if (!nestable) {
      throw new Error('koHover attachable only to ko-nestable');
    }

    this.node = nestable.getKoItem() as KoShape;
    this.sub.add(this.layer.onNewItem.subscribe(this.onLayerAdd.bind(this)));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();

    if (this._tween) {
      this._tween.destroy();
    }
  }

  private onLayerAdd(item: KoNestable) {
    if (this.node.id() !== item.id) {
      return;
    }

    this.tryPlay();
  }


  private tryPlay() {
    if ((!this.node.getLayer() && !this.node.getStage())) {
      return;
    }

    this._tween = new Tween({
      ...this._currentTransition,
      node: this.node
    });
    this._tween.play();
  }

}
