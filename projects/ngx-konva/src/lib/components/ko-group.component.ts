import { AfterViewInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { Group } from 'konva/lib/Group';
import { Layer } from 'konva/lib/Layer';
import { KoShape } from '../common';
import { KoNestable, KoNestableConfig } from '../common/ko-nestable';

@Component({
  selector: 'ko-group',
  template: `<ng-content></ng-content>`,
  styles: [``],
  providers: [{
    provide: KoNestable,
    useExisting: KoGroupComponent
  }]
})
export class KoGroupComponent extends KoNestable implements OnInit, AfterViewInit {
  @ContentChildren(KoNestable)
  private children!: QueryList<KoNestable>;

  group: Group;

  private _config: KoNestableConfig = {};
  @Input()
  set config(c: KoNestableConfig) {
    this._config = c;
    this._config.id = this.id;
    this.updateGroup();
  };

  @Output()
  onNewItem = new EventEmitter<Layer | KoShape | Group>();

  @Output()
  beforeUpdate = new EventEmitter<Group>();

  @Output()
  afterUpdate = new EventEmitter<Group>();

  constructor() {
    super();
    this.group = new Group();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    this.updateChildren();

    this.sub.add(
      this.children.changes.subscribe(
        this.updateChildren.bind(this)
      )
    )
  }

  override getKoItem(): Group {
    return this.group;
  }

  private updateGroup() {
    this.beforeUpdate.emit(this.group);
    this.setConfig(this._config);
    this.afterUpdate.emit(this.group);
  }

  private updateChildren() {
    for (const child of this.children.toArray()) {
      const found = this.group.findOne(`#${child.id}`);

      if (found) {
        continue;
      }

      const koItem = child.getKoItem();
      this.group.add(koItem);
      this.onNewItem.emit(koItem);
    }
  }
}
