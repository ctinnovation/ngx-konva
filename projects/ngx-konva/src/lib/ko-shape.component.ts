import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CircleConfig } from 'konva/lib/shapes/Circle';
import { LineConfig } from 'konva/lib/shapes/Line';
import { RectConfig } from 'konva/lib/shapes/Rect';
import { RegularPolygonConfig } from 'konva/lib/shapes/RegularPolygon';
import { TextConfig } from 'konva/lib/shapes/Text';
import { KoListenable } from './ko-listenable';
import { KoNestable, Shape, ShapeSelectors, shapeTypesMap } from './ko-nestable';

@Component({
  selector: 'ko-circle, ko-rect, ko-line, ko-text, ko-regular-polygon',
  template: ``,
  styles: [``],
  providers: [{
    provide: KoNestable,
    useExisting: KoShapeComponent
  }, {
    provide: KoListenable,
    useExisting: KoShapeComponent
  }]
})
export class KoShapeComponent extends KoNestable implements OnInit {
  shape: Shape;

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
  beforeUpdate = new EventEmitter<Shape>();

  @Output()
  afterUpdate = new EventEmitter<Shape>();

  selector: ShapeSelectors;

  constructor(
    private elementRef: ElementRef<HTMLElement>
  ) {
    super();
    this.selector = this.elementRef.nativeElement.localName as ShapeSelectors;
    this.shape = new shapeTypesMap[this.selector](this._config as any)
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override getKoItem(): Shape {
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
