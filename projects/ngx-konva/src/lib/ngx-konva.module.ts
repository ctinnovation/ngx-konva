import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import 'konva/lib/Core';
import { KoGroupComponent } from './components/ko-group.component';
import { KoImageComponent } from './components/ko-image.component';
import { KoLabelComponent } from './components/ko-label.component';
import { KoLayerComponent } from './components/ko-layer.component';
import { KoShapeComponent } from './components/ko-shape.component';
import { KoStageAutoScaleComponent } from './components/ko-stage-autoscale.component';
import { KoStageComponent } from './components/ko-stage.component';
import { KoDragDirective } from './directives/ko-drag.directive';
import { KoHoverDirective } from './directives/ko-hover.directive';
import { KoMouseDirective } from './directives/ko-mouse.directive';
import { KoPointerDirective } from './directives/ko-pointer.directive';
import { KoTouchDirective } from './directives/ko-touch.directive';
import { KoTransformDirective } from './directives/ko-transform.directive';

@NgModule({
  declarations: [
    KoStageAutoScaleComponent,
    KoStageComponent,
    KoLayerComponent,
    KoShapeComponent,
    KoHoverDirective,
    KoGroupComponent,
    KoPointerDirective,
    KoImageComponent,
    KoLabelComponent,
    KoDragDirective,
    KoTransformDirective,
    KoMouseDirective,
    KoTouchDirective
  ],
  imports: [CommonModule],
  exports: [
    KoStageAutoScaleComponent,
    KoStageComponent,
    KoLayerComponent,
    KoShapeComponent,
    KoHoverDirective,
    KoGroupComponent,
    KoPointerDirective,
    KoImageComponent,
    KoLabelComponent,
    KoDragDirective,
    KoTransformDirective,
    KoMouseDirective,
    KoTouchDirective
  ],
  providers: [],
})
export class NgxKonvaModule { }