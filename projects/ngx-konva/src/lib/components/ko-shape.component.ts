import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CircleConfig } from 'konva/lib/shapes/Circle';
import { LineConfig } from 'konva/lib/shapes/Line';
import { RectConfig } from 'konva/lib/shapes/Rect';
import { RegularPolygonConfig } from 'konva/lib/shapes/RegularPolygon';
import { TextConfig } from 'konva/lib/shapes/Text';
import { KoShape, KoShapeSelectors, koShapeTypesMap } from '../common';
import { KoNestable } from '../common/ko-nestable';

@Component({
  selector: 'ko-circle, ko-rect, ko-line, ko-text, ko-regular-polygon',
  template: ``,
  styles: [``],
  providers: [{
    provide: KoNestable,
    useExisting: KoShapeComponent
  }]
})
export class KoShapeComponent extends KoNestable implements OnInit {
  shape: KoShape;

  private _config: RectConfig | CircleConfig | LineConfig | TextConfig | RegularPolygonConfig = {};
  @Input()
  set config(c: RectConfig | CircleConfig | LineConfig | TextConfig | RegularPolygonConfig) {
    this._config = c;
    this._config.id = this.id;
    this.updateShape();
  };

  @Input()
  centerOrigin = false;

  @Output()
  beforeUpdate = new EventEmitter<KoShape>();

  @Output()
  afterUpdate = new EventEmitter<KoShape>();

  selector: KoShapeSelectors;

  constructor(
    private elementRef: ElementRef<HTMLElement>
  ) {
    super();
    this.selector = this.elementRef.nativeElement.localName as KoShapeSelectors;
    this.shape = new koShapeTypesMap[this.selector](this._config as any)
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override getKoItem(): KoShape {
    return this.shape;
  }

  private updateShape() {
    this._beforeRender();
    let config = this._config as any;
    this.shape.setAttrs(config);
    this._afterRender();
  }

  private _beforeRender() {
    this.beforeUpdate.emit(this.shape);
  }

  private _afterRender() {
    if (this.centerOrigin) {
      this.shape.offsetX(this.shape!.width() / 2)
      this.shape.offsetY(this.shape!.height() / 2)
    }

    this.afterUpdate.emit(this.shape);
  }
}
