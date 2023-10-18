import { Directive, Input, OnDestroy, OnInit, Optional, Self } from '@angular/core';
import { Tween, TweenConfig } from 'konva/lib/Tween';
import { isEqual } from 'lodash';
import { BehaviorSubject, Subscription, combineLatest, delay, distinctUntilChanged, filter, map, skipUntil } from 'rxjs';
import { KoShape } from '../common';
import { KoNestable, KoNestableNode } from '../common/ko-nestable';
import { KoLayerComponent } from '../components/ko-layer.component';

@Directive({
  selector: '[koTransition]'
})
export class KoTransitionDirective implements OnInit, OnDestroy {
  private _trigger$ = new BehaviorSubject<Omit<TweenConfig, 'node'>>({});
  private _ready$ = new BehaviorSubject<boolean>(false);

  private _play$ = combineLatest([this._trigger$, this._ready$.pipe(filter(r => !!r))])
    .pipe(
      skipUntil(this._ready$.asObservable().pipe(
        filter(i => !!i)
      )),
      delay(120),
      map(([trigger, _]) => trigger),
      distinctUntilChanged(isEqual),
    );

  private _tween: Tween | null = null;

  @Input()
  set koTransition(t: Omit<TweenConfig, 'node'>) {
    if (this._tween) {
      this._tween.destroy();
    }

    this._trigger$.next(t);
  };

  sub = new Subscription();

  private node: KoNestableNode;

  constructor(
    @Optional() @Self() nestable: KoNestable,
    @Optional() private layerComponent: KoLayerComponent
  ) {
    if (!nestable) {
      throw new Error('koTransition attachable only to ko-nestable');
    }

    if (!this.layerComponent) {
      throw new Error('koTransition should be nested in ko-layer!')
    }

    this.sub.add(this._play$.subscribe(this.play.bind(this)))

    this.node = nestable.getKoItem() as KoShape;

    // wait for node to be added to a layer
    if (!this.node.getLayer() || !this.node.getStage()) {
      this.layerComponent.layer.on('ko:added', () => {
        this._ready$.next(true);
      })
    } else {
      this._ready$.next(true);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();

    if (this._tween) {
      this._tween.destroy();
    }
  }

  private play() {
    this._tween = new Tween({
      ...this._trigger$.value,
      node: this.node,
      onFinish: () => {
        this._tween = null;
      },
      onUpdate: () => {
        this._tween = null;
      }
    });
    this._tween.play();
  }

}
