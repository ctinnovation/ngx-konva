import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Optional, Output } from '@angular/core';
import { Layer } from 'konva/lib/Layer';
import { Stage, StageConfig } from 'konva/lib/Stage';
import { Subject, Subscription, debounceTime } from 'rxjs';

export type StageConfigOptionalContainer = Omit<StageConfig, 'container'> & Partial<Pick<StageConfig, 'container'>>;

@Component({
  selector: 'ko-stage',
  template: `<ng-content></ng-content>`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KoStageComponent implements OnInit, OnDestroy, AfterViewInit {
  container: ElementRef;
  stage: Stage;

  private draw$ = new Subject<void>();

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
  get config() {
    return this._config;
  }

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
    this.sub.add(
      this.draw$
        .pipe(debounceTime(20))
        .subscribe(this.draw.bind(this))
    )
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.stage.destroy();
  }

  addChild(layer: Layer) {
    const found = this.stage.findOne(`#${layer.id()}`);
    if (found) {
      return;
    }

    this.stage.add(layer);
    layer.fire('ko:added', this.stage);
    this.onNewLayer.emit(layer);
    this.draw$.next();
  }

  private updateStage() {
    this.beforeUpdate.emit(this.stage);
    this.stage.setAttrs({
      ...this._config,
      container: this._config.container || this.container.nativeElement
    });
    this.afterUpdate.emit(this.stage);
    this.draw$.next();
  }

  draw() {
    this.stage.draw();
  }
}
