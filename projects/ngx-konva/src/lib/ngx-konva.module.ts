import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KoGroupComponent } from './components/ko-group.component';
import { KoImageComponent } from './components/ko-image.component';
import { KoLabelComponent } from './components/ko-label.component';
import { KoLayerComponent } from './components/ko-layer.component';
import { KoShapeComponent } from './components/ko-shape.component';
import { KoStageAutoScaleComponent } from './components/ko-stage-autoscale.component';
import { KoStageComponent } from './components/ko-stage.component';
import { KoDragDirective } from './directives/ko-drag.directive';
import { KoHoverDirective } from './directives/ko-hover.directive';
import { KoPointerDirective } from './directives/ko-pointer.directive';
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
    KoTransformDirective
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
    KoTransformDirective
  ],
  providers: [],
})
export class NgxKonvaModule { }