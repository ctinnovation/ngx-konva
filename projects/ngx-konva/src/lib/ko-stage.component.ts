import { AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Optional, Output, QueryList, forwardRef } from '@angular/core';
import { Layer } from 'konva/lib/Layer';
import { Stage, StageConfig } from 'konva/lib/Stage';
import { Subscription } from 'rxjs';
import { KoNestable } from './ko-nestable';

export type StageConfigOptionalContainer = Omit<StageConfig, 'container'> & Partial<Pick<StageConfig, 'container'>>;

@Component({
  selector: 'ko-stage',
  template: `<ng-content></ng-content>`,
  styles: [``]
})
export class KoStageComponent implements OnInit, OnDestroy, AfterViewInit {
  container: ElementRef;

  @ContentChildren(forwardRef(() => KoNestable))
  children!: QueryList<KoNestable>;

  stage: Stage;

  @Output()
  beforeUpdate = new EventEmitter<Stage>();

  @Output()
  afterUpdate = new EventEmitter<Stage>();

  @Output()
  onNewLayer = new EventEmitter<Layer>();

  private _config: StageConfigOptionalContainer;

  @Input()
  set config(c: StageConfigOptionalContainer) {
    if (!this.container && !c.container) {
      throw new Error('Specify at least a config.container or nest ko-stage in div!')
    }

    this._config = c;
    this.updateStage();
  };

  private sub = new Subscription();

  constructor(
    @Optional() container: ElementRef
  ) {
    this.container = container;
    this._config = { container: container.nativeElement };
    this.stage = new Stage({
      ...this._config,
      container: this._config.container || this.container.nativeElement
    });
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.sub.add(
      this.children.changes.subscribe(() => {
        this.updateLayers();
      })
    )
    console.log(this.children.toArray())
    this.updateLayers();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.stage.destroy();
  }

  private updateLayers() {
    for (const child of this.children.toArray()) {
      const found = this.stage.findOne(`#${child.id}`);

      if (found) {
        continue;
      }

      const koItem = child.getKoItem();

      if (!(koItem instanceof Layer)) {
        console.warn(`${koItem.nodeType} not attachable to ko-stage/ko-stage-autoscale!`);
        continue;
      }

      this.stage.add(koItem);
      this.onNewLayer.emit(koItem);
    }
    this.stage.draw();
  }

  private updateStage() {
    this.beforeUpdate.emit(this.stage);
    this.stage.setAttrs({
      ...this._config,
      container: this._config.container || this.container.nativeElement
    });
    this.afterUpdate.emit(this.stage);
    this.stage.draw();
  }
}
