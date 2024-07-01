import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ImageConfig, Image as KonvaImage } from 'konva/lib/shapes/Image';
import { defaults } from 'lodash';
import { KoShape } from '../common';
import { KoListeningDirective } from '../common/ko-listening';
import { KoNestable, KoNestableConfig } from '../common/ko-nestable';
import { KoGroupComponent } from './ko-group.component';
import { KoLayerComponent } from './ko-layer.component';

export type KoImageConfig = Omit<ImageConfig, 'image'>;

@Component({
  selector: 'ko-image',
  template: `<ng-content></ng-content>`,
  styles: [``],
  providers: [{
    provide: KoNestable,
    useExisting: KoImageComponent
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KoImageComponent extends KoNestable implements OnInit {
  node: KonvaImage;

  private _image: HTMLImageElement = new Image();

  private _src: string = '';
  @Input()
  set src(s: string) {
    if (s === this._src) {
      return;
    }

    this._src = s;
    this.updateShape();
  };

  private _config: KoNestableConfig = this.configDefaults;
  @Input()
  set config(c: KoNestableConfig) {
    this._config = c;
    this._config = defaults(c, this.configDefaults);
    this.updateShape();
  };

  @Input()
  centerOrigin = false;

  @Output()
  beforeUpdate = new EventEmitter<KoShape>();

  @Output()
  afterUpdate = new EventEmitter<KoShape>();

  onLoadListener = this.onImageLoad.bind(this);

  constructor(
    @Optional() @Self() override koListening: KoListeningDirective,
    @Optional() private layerComponent: KoLayerComponent,
    @Optional() private groupComponent: KoGroupComponent
  ) {
    if (!layerComponent && !groupComponent) {
      throw new Error(`ko-image should be nested inside ko-layer!`)
    }

    super(koListening);
    this.node = new KonvaImage({
      ...this._config,
      image: this._image
    });
    (this.groupComponent || this.layerComponent).addChild(this.node);
    this._image.addEventListener('load', this.onLoadListener);
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this._image.removeEventListener('load', this.onLoadListener);
  }

  override getKoItem(): KoShape {
    return this.node;
  }

  private updateShape() {
    if (!this._src) {
      return;
    }

    this._image.src = this._src;
  }

  private _beforeRender() {
    this.beforeUpdate.emit(this.node);
  }

  private _afterRender() {
    if (this.centerOrigin) {
      this.node.offsetX(this.node!.width() / 2)
      this.node.offsetY(this.node!.height() / 2)
    }

    this.afterUpdate.emit(this.node);
  }

  private onImageLoad() {
    this._beforeRender();
    this.setConfig(this._config);
    this._afterRender();
  }
}
