import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Label, Tag, TagConfig } from 'konva/lib/shapes/Label';
import { Text, TextConfig } from 'konva/lib/shapes/Text';
import { KoNestable, KoNestableConfig } from '../common/ko-nestable';

@Component({
  selector: 'ko-label',
  template: ``,
  styles: [``],
  providers: [{
    provide: KoNestable,
    useExisting: KoLabelComponent
  }]
})
export class KoLabelComponent extends KoNestable implements OnInit {
  node: Label;
  text?: Text;
  tag?: Tag;

  private _config: KoNestableConfig = {};
  @Input()
  set config(c: KoNestableConfig) {
    this._config = c;
    this._config.id = this.id;
    this.updateLabel();
  };

  private _textConfig: TextConfig = {};
  @Input()
  set textConfig(c: TextConfig) {
    this._textConfig = c;
    this.updateText();
  };

  private _tagConfig: TagConfig = {};
  @Input()
  set tagConfig(c: TagConfig) {
    this._tagConfig = c;
    this.updateTag();
  };

  @Input()
  set tagDisabled(d: boolean) {
    if (d && this.tag) {
      this.tag.remove();
      this.tag.destroy();
      this.tag = undefined;
    }
  }

  @Input()
  set textDisabled(d: boolean) {
    if (d && this.text) {
      this.text.remove();
      this.text.destroy();
      this.text = undefined;
    }
  }

  @Input()
  centerOrigin = false;

  @Output()
  beforeUpdate = new EventEmitter<Label>();

  @Output()
  afterUpdate = new EventEmitter<Label>();

  constructor() {
    super();

    this.node = new Label(this._config);
    this.text = new Text(this._textConfig);
    this.tag = new Tag(this._tagConfig);

    this.node
      .add(this.tag)
      .add(this.text);
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  override getKoItem(): Label {
    return this.node;
  }

  private updateText() {
    if (!this.text) {
      return;
    }

    this.text.setAttrs(this._textConfig);
  }

  private updateLabel() {
    this._beforeRender();
    this.setConfig(this._config);
    this._afterRender();
  }

  private updateTag() {
    if (!this.tag) {
      return;
    }

    this.tag.setAttrs(this._tagConfig);
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
}
