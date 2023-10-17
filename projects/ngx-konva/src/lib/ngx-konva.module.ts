import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KoGroupComponent } from './components/ko-group.component';
import { KoImageComponent } from './components/ko-image.component';
import { KoLayerComponent } from './components/ko-layer.component';
import { KoShapeComponent } from './components/ko-shape.component';
import { KoStageAutoScaleComponent } from './components/ko-stage-autoscale.component';
import { KoStageComponent } from './components/ko-stage.component';
import { KoHoverDirective } from './directives/ko-hover.directive';
import { KoPointerDirective } from './directives/ko-pointer.directive';
import { KoTransitionDirective } from './directives/ko-transition.directive';

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
    KoTransitionDirective
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
    KoTransitionDirective
  ],
  providers: [],
})
export class NgxKonvaModule { }