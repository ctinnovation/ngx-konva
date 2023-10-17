import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KoHoverDirective } from './ko-hover.directive';
import { KoLayerComponent } from './ko-layer.component';
import { KoShapeComponent } from './ko-shape.component';
import { KoStageAutoScaleComponent } from './ko-stage-autoscale.component';
import { KoStageComponent } from './ko-stage.component';

@NgModule({
  declarations: [
    KoStageAutoScaleComponent,
    KoStageComponent,
    KoLayerComponent,
    KoShapeComponent,
    KoHoverDirective
  ],
  imports: [CommonModule],
  exports: [
    KoStageAutoScaleComponent,
    KoStageComponent,
    KoLayerComponent,
    KoShapeComponent,
    KoHoverDirective
  ],
  providers: [],
})
export class NgxKonvaModule { }