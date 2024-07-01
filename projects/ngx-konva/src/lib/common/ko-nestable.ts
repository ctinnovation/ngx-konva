import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Group, GroupConfig } from "konva/lib/Group";
import { Layer, LayerConfig } from "konva/lib/Layer";
import { Easings, Tween, TweenConfig } from "konva/lib/Tween";
import { Label, LabelConfig } from "konva/lib/shapes/Label";
import { Subscription } from "rxjs";
import { v4 } from "uuid";
import { KoShape, KoShapeConfig } from ".";
import { KoListeningDirective } from "./ko-listening";

export type KoNestableNode = Group | Layer | KoShape | Label;
export type KoNestableConfig = (KoShapeConfig | GroupConfig | LayerConfig | LabelConfig) & { _skipTransition?: boolean };

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KoNestable implements OnInit, OnDestroy {
  static Easings = Easings;

  @Input()
  id: string = v4();

  @Input()
  transitionWith?: Omit<TweenConfig, 'node' | 'onUpdate' | 'onFinish'>;

  @Input()
  transitionDelay: number = 0;

  @Output()
  transitionOnUpdate = new EventEmitter<KoNestableNode>();

  @Output()
  transitionOnFinish = new EventEmitter<KoNestableNode>();

  protected sub = new Subscription();

  protected _tween?: Tween;
  protected _tweenTimeout?: any;
  private _initialSetConfig = true;

  protected get shouldListen(): boolean {
    return !!this.koListening;
  }

  protected configDefaults: KoShapeConfig = {
    id: this.id,
    listening: this.shouldListen,
    perfectDrawEnabled: false,
    hitStrokeWidth: 0,
    shadowForStrokeEnabled: false,
  }

  getKoItem(): KoNestableNode {
    throw new Error('Unimplemented!')
  }

  constructor(
    protected koListening: KoListeningDirective
  ) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.getKoItem().destroy();
    this.sub.unsubscribe();


    if (this._tween) {
      this._tween.finish();
      this._tween.destroy();
      this._tween = undefined;
    }
  }

  setConfig(config: KoNestableConfig) {
    const node = this.getKoItem();

    clearTimeout(this._tweenTimeout);

    if (this._tween) {
      this._tween.finish();
      this._tween.destroy();
      this._tween = undefined;
    }

    if (
      this.transitionWith &&
      node.getLayer() &&
      !config._skipTransition &&
      !this._initialSetConfig
    ) {
      this._tweenTimeout = setTimeout(() => {
        this._tween = new Tween({
          ...this.transitionWith,
          ...config,
          onUpdate: () => { this.transitionOnUpdate.emit(node) },
          onFinish: () => { this.transitionOnFinish.emit(node) },
          node
        });

        this._tween.play();
      }, this.transitionDelay || 0)
    } else {
      node.setAttrs(config);
    }

    this._initialSetConfig = false;
  }
}
