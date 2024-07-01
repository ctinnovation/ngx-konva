import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Optional, Output, Self, SkipSelf } from '@angular/core';
import { Group } from 'konva/lib/Group';
import { Layer } from 'konva/lib/Layer';
import { defaults, isEqual } from 'lodash';
import { Subject, debounceTime } from 'rxjs';
import { KoShape } from '../common';
import { KoListeningDirective } from '../common/ko-listening';
import { KoNestable, KoNestableConfig, KoNestableNode } from '../common/ko-nestable';
import { KoStageAutoScaleComponent } from './ko-stage-autoscale.component';
import { KoStageComponent } from './ko-stage.component';


@Component({
  selector: 'ko-layer',
  template: `<ng-content></ng-content>`,
  styles: [``],
  providers: [{
    provide: KoNestable,
    useExisting: KoLayerComponent
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KoLayerComponent extends KoNestable implements OnInit, OnDestroy, AfterViewInit {
  layer: Layer;
  stageComponent: KoStageComponent;

  private draw$ = new Subject<void>();
  private _config: KoNestableConfig = this.configDefaults;

  @Input()
  set config(c: KoNestableConfig) {
    if (isEqual(c, this._config)) {
      return;
    }

    this._config = defaults(c, this.configDefaults);
    this.updateLayer();
  };

  @Output()
  onNewItem = new EventEmitter<Layer | KoShape | Group>();

  @Output()
  beforeUpdate = new EventEmitter<Layer>();

  @Output()
  afterUpdate = new EventEmitter<Layer>();

  constructor(
    @Optional() @Self() override koListening: KoListeningDirective,
    @Optional() stageComponent?: KoStageComponent,
    @Optional() stageAutoComponent?: KoStageAutoScaleComponent,
    @Optional() @SkipSelf() private layerComponent?: KoLayerComponent
  ) {
    if (!stageComponent && !stageAutoComponent) {
      throw new Error('ko-layer should be nested inside ko-stage or ko-stage-autoscale or ko-layer!')
    }

    super(koListening);
    this.layer = new Layer(this._config);
    this.stageComponent = (stageComponent || stageAutoComponent)!;

    if (this.layerComponent) {
      this.layerComponent.addChild(this.layer);
    } else {
      this.stageComponent.addChild(this.layer);
    }

    this.sub.add(
      this.draw$
        .pipe(debounceTime(10))
        .subscribe(this.draw.bind(this))
    );
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
  }

  override getKoItem(): Layer {
    return this.layer;
  }

  updateLayer() {
    this.beforeUpdate.emit(this.layer);
    this.setConfig(this._config);
    this.draw$.next();
    this.afterUpdate.emit(this.layer);
  }

  addChild(child: KoNestableNode) {
    const found = this.layer.findOne(`#${child.id()}`);
    if (found) {
      return;
    }

    this.layer.add(child);
    this.onNewItem.emit(child);
    child.fire('ko:added', this.layer);
    this.draw$.next();
  }

  draw() {
    this.layer.draw();
  }
}
