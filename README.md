# ngx-konva

This library provides you simple Angular bindings for [KonvaJS](https://konvajs.org/). This is still a work in progress and not an official release of Konva framework. PRs and contributions are more than welcome.

This project is inspired by the more official library [n2-konva](https://github.com/konvajs/ng2-konva) that, as for now, seems not to be maintaned.

Supported Angular version: `16`.

- [Installation](#installation)
- [Konva API implementation status](#konva-api-implementation-status)
- [Example usage](#example-usage)
- [Stage autoscale](#stage-autoscale)
- [Images](#images)
- [Events handling](#events-handling)
  - [KoHoverDirective](#kohoverdirective)
  - [KoPointerDirective](#kopointerdirective)
- [Inner events](#inner-events)
  - [ko-layer](#ko-layer)
  - [ko-stage](#ko-stage)
  - [ko-shape](#ko-shape)
- [How to contribute](#how-to-contribute)
  - [Event listeners](#event-listeners)
- [Full API Documentation](#full-api-documentation)

## Installation

```bash
npm install ngx-konva konva
```

## Konva API implementation status

| API                                                                        | Status | Component                  |
| -------------------------------------------------------------------------- | ------ | -------------------------- |
| [`Stage`](https://konvajs.org/api/Konva.Stage.html#main)                   | ✅      | `ko-stage`                 |
| [`Layer`](https://konvajs.org/api/Konva.Layer.html#main)                   | ✅      | `ko-layer`                 |
| [`Rect`](https://konvajs.org/api/Konva.Rect.html#main)                     | ✅      | `ko-rect`                  |
| [`Circle`](https://konvajs.org/api/Konva.Circle.html#main)                 | ✅      | `ko-circle`                |
| [`Line`](https://konvajs.org/api/Konva.Line.html#main)                     | ✅      | `ko-line`                  |
| [`RegularPolygon`](https://konvajs.org/api/Konva.RegularPolygon.html#main) | ✅      | `ko-regular-polygon`       |
| [`Text`](https://konvajs.org/api/Konva.Text.html#main)                     | ✅      | `ko-text`                  |
| [`TextPath`](https://konvajs.org/api/Konva.TextPath.html#main)             | ❌      |                            |
| [`Ellipse`](https://konvajs.org/api/Konva.Ellipse.html#main)               | ❌      |                            |
| [`Group`](https://konvajs.org/api/Konva.Group.html#main)                   | ✅      | `ko-group`                 |
| [`Ring`](https://konvajs.org/api/Konva.Ring.html#main)                     | ❌      |                            |
| [`Image`](https://konvajs.org/api/Konva.Image.html#main)                   | ✅      | `ko-image`                 |
| [`Label`](https://konvajs.org/api/Konva.Label.html#main)                   | ❌      |                            |
| [`Path`](https://konvajs.org/api/Konva.Path.html#main)                     | ❌      |                            |
| [`Sprite`](https://konvajs.org/api/Konva.Sprite.html#main)                 | ❌      |                            |
| [`Star`](https://konvajs.org/api/Konva.Star.html#main)                     | ❌      |                            |
| [`Tween`](https://konvajs.org/api/Konva.Tween.html#main)                   | ✅      | `koTransition` (directive) |

## Example usage

Each element respect the hierarchy described here: https://konvajs.org/docs/overview.html.

```html
<ko-stage [config]="{width: 100, height: 100}">
      <ko-layer>
        <ko-circle [config]="{ 
          radius: 120,
          fill: 'blue',
          stroke: 'black',
          strokeWidth: 4,
          x: 0,
          y: 0
        }"></ko-circle>
        <ko-image [config]="{x: 100, y: 100}"
          src="https://upload.wikimedia.org/wikipedia/it/0/08/Dartfener.jpg">
        </ko-image>
      </ko-layer>
</ko-stage>
```

Each item has an @Input `config` you can use dynamically to change the configuration of the Node.
All properties allowed are handled by `config`, but if you need to change the `id` of a Node use the related `id` @Input.

> **Note:** Each Node is identified by an automatically generated `id` to avoid adding the same node multiple times, use the `id` @Input accordingly.

In order to listen to events refer to [Events handling](#events-handling).

## Stage autoscale

If you do not want to handle `width/height` directly on `ko-stage` you can use the component `ko-stage-autoscale` and modifying the parent container size: the `ko-stage-autoscale` will size and scale automatically the container in order to fit it perfectly, even when the container resizes.

The first container size different from 0, 0 will be considered the initial 1 scale.

```html
<div id="container" [style.width.px]="width" [style.height.px]="height">
  <ko-stage-autoscale>
        <ko-layer>
          <ko-circle [config]="{ 
            radius: 120,
            fill: 'blue',
            stroke: 'black',
            strokeWidth: 4,
            x: 0,
            y: 0
          }"></ko-circle>
        </ko-layer>
  </ko-stage-autoscale>
</div>
```

## Images

In order to simplify the [Konva Image API](https://konvajs.org/docs/shapes/Image.html) the `[config]` provided for `ko-image` does not include `config.image`. You can use the @input `[src]` to specify the image to load and all the loading work will be done internally for you.

```html
<ko-stage [config]="{width: 100, height: 100}">
      <ko-layer>
        <ko-image [config]="{x: 100, y: 100}"
          src="https://upload.wikimedia.org/wikipedia/it/0/08/Dartfener.jpg">
        </ko-image>
      </ko-layer>
</ko-stage>
```

## Events handling

In order to avoid consuming memory setting up unused listeners, the Node events are handled through directives.

These are the directives you can use:

### KoHoverDirective

```html
<ko-circle koHover (onHoverStart)="handleStart($event)" (onHoverEnd)="handleEnd($event)" [config]="{ 
          radius: 120,
          fill: 'blue',
          stroke: 'black',
          strokeWidth: 4,
          x: 0,
          y: 0
}"></ko-circle>
```

It allows to capture when the user hover on a Node. Each `onHoverStart` and `onHoverEnd` emits the underlying `Shape` of KonvaJS.

### KoPointerDirective

```html
<ko-circle koPointer (koPointerDblClick)="onDblClick($event)" [config]="{ 
          radius: 120,
          fill: 'blue',
          stroke: 'black',
          strokeWidth: 4,
          x: 0,
          y: 0
}"></ko-circle>
```

It allows to capture all pointer events. [Full API](https://github.com/giovanni-bertoncelli/ngx-konva/blob/main/docs/classes/KoPointerDirective.md).

## Inner events

### ko-layer

`ko-layers` provides you these output:

- `(onNewItem)`: when a new `Shape` or `Layer` is added to the current layer. Argument: the `Shape | Layer` added.
- `(beforeUpdate)` `(afterUpdate)`: called before/after the layers gets updated. Argument: `Layer`. Useful to use the underlying KonvaJS API on the passed argument.

### ko-stage

`ko-layers` provides you these output:

- `(onNewLayer)`: when a new `Layer` is added to the current layer. Argument: the `Layer` added.
- `(beforeUpdate)` `(afterUpdate)`: called before/after the layers gets updated. Argument: `Layer`. Useful to use the underlying KonvaJS API on the passed argument.

### ko-shape

`ko-shape` (`ko-line, ko-rect, ko-circle, ko-regular-polygon, ko-text, ko-image, ko-group`) provides you these output:

- `(beforeUpdate)` `(afterUpdate)`: called before/after the layers gets updated. Argument: `Layer`. Useful to use the underlying KonvaJS API on the passed argument and modifying directly the Konva Node.

## How to contribute

Contributing is quite simple: in order to complete coverage of the KonvaJS API we have to add more shapes.

To add more "simple" shapes take a look to the `./projects/ngx-konva/src/lib/ko-shape.component.ts` component:

- Add the new selector
- Update the `ko-nestable.ts` types
- Check if the default configuration handling is fine

If you need to handle children inside the new component or create more complex shapes please create a specific component for that. Extend the `KoNestable` class for each component that should be nestable inside a Layer and provide the `getKoItem` to return the underlying shape. By doing that `KoNestable` will take care of adding and destroying the Shape instances your component will use. Again, take a look to `KoShapeComponent` to see an example.

### Event listeners

In order to add new event listeners to the shapes see `ko-hover.directive.ts` as an example of an event listener directive.

## Full API Documentation

See [/docs](https://github.com/giovanni-bertoncelli/ngx-konva/tree/main/docs) for full API Documentation.