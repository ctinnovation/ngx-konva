import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageConfig, Image as KonvaImage } from 'konva/lib/shapes/Image';
import { KoShape } from '../common';
import { KoNestable } from '../common/ko-nestable';

export type KoImageConfig = Omit<ImageConfig, 'image'>;

@Component({
  selector: 'ko-image',
  template: ``,
  styles: [``],
  providers: [{
    provide: KoNestable,
    useExisting: KoImageComponent
  }]
})
export class KoImageComponent extends KoNestable implements OnInit {
  node: KonvaImage;

  private _image: HTMLImageElement = new Image();

  private _src?: string;
  @Input()
  set src(s: string) {
    this._src = s;
    this.updateShape();
  };

  private _config: KoImageConfig = {};
  @Input()
  set config(c: KoImageConfig) {
    this._config = c;
    this._config['id'] = this.id;
    this.updateShape();
  };

  @Input()
  centerOrigin = false;

  @Output()
  beforeUpdate = new EventEmitter<KoShape>();

  @Output()
  afterUpdate = new EventEmitter<KoShape>();

  onLoadListener = this.onImageLoad.bind(this);

  constructor() {
    super();
    this.node = new KonvaImage({
      ...this._config,
      image: this._image
    })
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
    this.node.setAttrs(this._config);
    this._afterRender();
  }
}
