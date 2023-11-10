import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Optional, Output, SkipSelf } from '@angular/core';
import { Group } from 'konva/lib/Group';
import { Layer } from 'konva/lib/Layer';
import { KoShape } from '../common';
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
  }]
})
export class KoLayerComponent extends KoNestable implements OnInit, OnDestroy, AfterViewInit {
  layer: Layer;
  stageComponent: KoStageComponent;

  private _config: KoNestableConfig = {
    id: this.id
  };

  @Input()
  set config(c: KoNestableConfig) {
    this._config = c;
    this._config.id = this.id;
    this.updateLayer();
  };

  @Output()
  onNewItem = new EventEmitter<Layer | KoShape | Group>();

  @Output()
  beforeUpdate = new EventEmitter<Layer>();

  @Output()
  afterUpdate = new EventEmitter<Layer>();

  constructor(
    @Optional() stageComponent?: KoStageComponent,
    @Optional() stageAutoComponent?: KoStageAutoScaleComponent,
    @Optional() @SkipSelf() private layerComponent?: KoLayerComponent
  ) {
    if (!stageComponent && !stageAutoComponent) {
      throw new Error('ko-layer should be nested inside ko-stage or ko-stage-autoscale or ko-layer!')
    }

    super();
    this.layer = new Layer(this._config);
    this.stageComponent = (stageComponent || stageAutoComponent)!;

    if (this.layerComponent) {
      this.layerComponent.addChild(this.layer);
    } else {
      this.stageComponent.addChild(this.layer);
    }
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
    this.layer.draw();
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
    this.layer.draw();
  }

}
