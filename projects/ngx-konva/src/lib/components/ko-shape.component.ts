import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Host, Input, OnInit, Optional, Output } from '@angular/core';
import { defaults } from 'lodash';
import { KoShape, KoShapeConfig, KoShapeSelectors, koShapeTypesMap } from '../common';
import { KoListeningDirective } from '../common/ko-listening';
import { KoNestable } from '../common/ko-nestable';
import { KoGroupComponent } from './ko-group.component';
import { KoLayerComponent } from './ko-layer.component';

@Component({
  selector: 'ko-circle, ko-rect, ko-line, ko-text, ko-regular-polygon, ko-path, ko-arrow, ko-arc, ko-star, ko-ring, ko-shape, ko-text-path, ko-ellipse, ko-wedge',
  template: `<ng-content></ng-content>`,
  styles: [``],
  providers: [{
    provide: KoNestable,
    useExisting: KoShapeComponent
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KoShapeComponent extends KoNestable implements OnInit {
  shape: KoShape;

  private _config: KoShapeConfig = this.configDefaults;
  @Input()
  set config(c: KoShapeConfig) {
    this._config = defaults(c, this.configDefaults);
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
    @Optional() @Host() override koListening: KoListeningDirective,
    private elementRef: ElementRef<HTMLElement>,
    @Optional() private layerComponent: KoLayerComponent,
    @Optional() private groupComponent: KoGroupComponent
  ) {
    super(koListening);
    this.selector = this.elementRef.nativeElement.localName as KoShapeSelectors;
    if (!layerComponent && !groupComponent) {
      throw new Error(`${this.selector} should be nested inside ko-layer or ko-group!`)
    }

    this.shape = new (koShapeTypesMap[this.selector] as any)(this._config as any);
    (this.groupComponent || this.layerComponent).addChild(this.shape);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override getKoItem(): KoShape {
    return this.shape;
  }

  private updateShape() {
    this._beforeRender();
    this.setConfig(this._config);
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
