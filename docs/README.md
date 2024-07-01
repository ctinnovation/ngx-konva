ngx-konva / [Exports](modules.md)

# ngx-konva

This library provides you simple Angular bindings for [KonvaJS](https://konvajs.org/). This is still a work in progress and not an official release of Konva framework. PRs and contributions are more than welcome.

This project is inspired by the more official library [n2-konva](https://github.com/konvajs/ng2-konva) that, as for now, seems not to be maintaned.

Supported Angular version: `16`.

- [Installation](#installation)
- [Konva API implementation status](#konva-api-implementation-status)
- [Example usage](#example-usage)
- [Stage autoscale](#stage-autoscale)
- [Basic shapes](#basic-shapes)
- [Images](#images)
- [Labels](#labels)
- [Transitions (Konva.Tween)](#transitions-konvatween)
- [Events handling](#events-handling)
  - [KoHoverDirective](#kohoverdirective)
  - [KoPointerDirective](#kopointerdirective)
  - [KoDragDirective](#kodragdirective)
  - [KoTransformDirective](#kotransformdirective)
- [Inner events](#inner-events)
  - [ko-layer](#ko-layer)
  - [ko-stage](#ko-stage)
  - [ko-nestable](#ko-nestable)
- [How to contribute](#how-to-contribute)
  - [Event listeners](#event-listeners)
- [Full API Documentation](#full-api-documentation)

## Installation

```bash
npm install ngx-konva konva
```

Simply import `NgxKonvaModule` inside any module you need to use it in:

```typescript
import { NgxKonvaModule } from 'ngx-konva';

@NgModule({
  // ... your stuff
  imports: [
    // ... other modules import
    NgxKonvaModule,
  ],
  // ... other module stuff
})
export class MyModule { }
```

## Konva API implementation status

| API                                                                          | Status | Component                                                                     |
| ---------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------- |
| [`Stage`](https://konvajs.org/api/Konva.Stage.html#main)                     | ✅      | `ko-stage`                                                                    |
| [`Layer`](https://konvajs.org/api/Konva.Layer.html#main)                     | ✅      | `ko-layer`                                                                    |
| [`Rect`](https://konvajs.org/api/Konva.Rect.html#main)                       | ✅      | `ko-rect`                                                                     |
| [`Circle`](https://konvajs.org/api/Konva.Circle.html#main)                   | ✅      | `ko-circle`                                                                   |
| [`Line`](https://konvajs.org/api/Konva.Line.html#main)                       | ✅      | `ko-line`                                                                     |
| [`RegularPolygon`](https://konvajs.org/api/Konva.RegularPolygon.html#main)   | ✅      | `ko-regular-polygon`                                                          |
| [`Text`](https://konvajs.org/api/Konva.Text.html#main)                       | ✅      | `ko-text`                                                                     |
| [`TextPath`](https://konvajs.org/api/Konva.TextPath.html#main)               | ✅      | `ko-text-path`                                                                |
| [`Ellipse`](https://konvajs.org/api/Konva.Ellipse.html#main)                 | ✅      | `ko-ellipse`                                                                  |
| [`Wedge`](https://konvajs.org/api/Konva.Wedge.html#main)                     | ✅      | `ko-wedge`                                                                    |
| [`Group`](https://konvajs.org/api/Konva.Group.html#main)                     | ✅      | `ko-group`                                                                    |
| [`Ring`](https://konvajs.org/api/Konva.Ring.html#main)                       | ✅      | `ko-ring`                                                                     |
| [`Image`](https://konvajs.org/api/Konva.Image.html#main)                     | ✅      | `ko-image`                                                                    |
| [`Label`](https://konvajs.org/api/Konva.Label.html#main)                     | ✅      | `ko-label`                                                                    |
| [`Path`](https://konvajs.org/api/Konva.Path.html#main)                       | ✅      | `ko-path`                                                                     |
| [`Sprite`](https://konvajs.org/api/Konva.Sprite.html#main)                   | ❌      |                                                                               |
| [`Star`](https://konvajs.org/api/Konva.Star.html#main)                       | ✅      | `ko-star`                                                                     |
| [`Arrow`](https://konvajs.org/api/Konva.Arrow.html#main)                     | ✅      | `ko-arrow`                                                                    |
| [`Shape`](https://konvajs.org/api/Konva.Shape.html#main)                     | ✅      | `ko-shape` (for [custom shapes](https://konvajs.org/docs/shapes/Custom.html)) |
| [`Arc`](https://konvajs.org/api/Konva.Arc.html#main)                         | ✅      | `ko-arc`                                                                      |
| [`Tween`](https://konvajs.org/api/Konva.Tween.html#main)                     | ✅      | `transitionWith`
