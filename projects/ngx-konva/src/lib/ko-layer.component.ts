import { AfterViewInit, Component, ContentChildren, EventEmitter, Input, OnDestroy, OnInit, Output, QueryList } from '@angular/core';
import { Layer, LayerConfig } from 'konva/lib/Layer';
import { Subscription } from 'rxjs';
import { KoShape } from './common';
import { KoNestable } from './ko-nestable';


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
  @ContentChildren(KoNestable)
  children!: QueryList<KoNestable>;

  layer: Layer;
  sub = new Subscription();

  private _config: LayerConfig = {};

  @Input()
  set config(c: LayerConfig) {
    this._config = c;
    this._config.id = this.id;
    this.updateLayer();
  };

  @Output()
  onNewItem = new EventEmitter<Layer | KoShape>();

  @Output()
  beforeUpdate = new EventEmitter<Layer>();

  @Output()
  afterUpdate = new EventEmitter<Layer>();

  constructor() {
    super();
    this.layer = new Layer(this._config);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    this.sub.add(
      this.children.changes.subscribe(this.updateChildren.bind(this))
    );
    this.updateChildren();
  }

  override ngOnDestroy(): void {
    this.sub.unsubscribe();
    super.ngOnDestroy();
  }

  override getKoItem(): Layer {
    return this.layer;
  }

  updateLayer() {
    this.beforeUpdate.emit(this.layer);
    this.layer.setAttrs(this._config);
    this.layer.draw();
    this.afterUpdate.emit(this.layer);
  }

  private updateChildren() {
    for (const child of this.children.toArray()) {
      const found = this.layer.findOne(`#${child.id}`);

      if (found) {
        continue;
      }

      const koItem = child.getKoItem();
      this.layer.add(koItem);
      this.onNewItem.emit(koItem);
    }

    this.layer.draw();
  }
}
