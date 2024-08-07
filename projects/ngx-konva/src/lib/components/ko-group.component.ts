import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { Group } from 'konva/lib/Group';
import { Layer } from 'konva/lib/Layer';
import { defaults } from 'lodash';
import { KoShape } from '../common';
import { KoListeningDirective } from '../common/ko-listening';
import { KoNestable, KoNestableConfig, KoNestableNode } from '../common/ko-nestable';
import { KoLayerComponent } from './ko-layer.component';

@Component({
  selector: 'ko-group',
  template: `<ng-content></ng-content>`,
  styles: [``],
  providers: [{
    provide: KoNestable,
    useExisting: KoGroupComponent
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KoGroupComponent extends KoNestable implements OnInit, AfterViewInit {
  group: Group;

  private _config: KoNestableConfig = this.configDefaults;
  @Input()
  set config(c: KoNestableConfig) {
    this._config = defaults(c, this.configDefaults);
    this.updateGroup();
  };

  @Output()
  onNewItem = new EventEmitter<Layer | KoShape | Group>();

  @Output()
  beforeUpdate = new EventEmitter<Group>();

  @Output()
  afterUpdate = new EventEmitter<Group>();

  constructor(
    @Optional() @Self() override koListening: KoListeningDirective,
    @Optional() private layerComponent: KoLayerComponent
  ) {
    super(koListening);
    this.group = new Group(this._config);
    this.layerComponent.addChild(this.group);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
  }

  override getKoItem(): Group {
    return this.group;
  }

  private updateGroup() {
    this.beforeUpdate.emit(this.group);
    this.setConfig(this._config);
    this.afterUpdate.emit(this.group);
  }

  addChild(child: KoNestableNode) {
    const found = this.group.findOne(`#${child.id()}`);

    if (found) {
      return;
    }

    this.group.add(child);
    this.onNewItem.emit(child);
  }
}
