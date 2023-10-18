import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShapeConfig } from 'konva/lib/Shape';
import { ArcConfig } from 'konva/lib/shapes/Arc';
import { ArrowConfig } from 'konva/lib/shapes/Arrow';
import { CircleConfig } from 'konva/lib/shapes/Circle';
import { EllipseConfig } from 'konva/lib/shapes/Ellipse';
import { LineConfig } from 'konva/lib/shapes/Line';
import { PathConfig } from 'konva/lib/shapes/Path';
import { RectConfig } from 'konva/lib/shapes/Rect';
import { RegularPolygonConfig } from 'konva/lib/shapes/RegularPolygon';
import { RingConfig } from 'konva/lib/shapes/Ring';
import { StarConfig } from 'konva/lib/shapes/Star';
import { TextConfig } from 'konva/lib/shapes/Text';
import { TextPathConfig } from 'konva/lib/shapes/TextPath';
import { WedgeConfig } from 'konva/lib/shapes/Wedge';
import { KoShape, KoShapeSelectors, koShapeTypesMap } from '../common';
import { KoNestable } from '../common/ko-nestable';

@Component({
  selector: 'ko-circle, ko-rect, ko-line, ko-text, ko-regular-polygon, ko-path, ko-arrow, ko-arc, ko-star, ko-ring, ko-shape, ko-text-path, ko-ellipse, ko-wedge',
  template: ``,
  styles: [``],
  providers: [{
    provide: KoNestable,
    useExisting: KoShapeComponent
  }]
})
export class KoShapeComponent extends KoNestable implements OnInit {
  shape: KoShape;

  private _config: RectConfig | CircleConfig | LineConfig | TextConfig | RegularPolygonConfig | PathConfig | ArrowConfig | ArcConfig | StarConfig | RingConfig | ShapeConfig | TextPathConfig | EllipseConfig | WedgeConfig = {};
  @Input()
  set config(c: RectConfig | CircleConfig | LineConfig | TextConfig | RegularPolygonConfig | PathConfig | ArrowConfig | ArcConfig | StarConfig | RingConfig | ShapeConfig | TextPathConfig | EllipseConfig | WedgeConfig) {
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
    this.shape = new (koShapeTypesMap[this.selector] as any)(this._config as any)
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
