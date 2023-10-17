# ngx-konva

This library provides you simple Angular bindings for [KonvaJS](https://konvajs.org/). This is still a work in progress and not an official release of Konva framework. PRs and contributions are more than welcome.

This project is inspired by the more official library [n2-konva](https://github.com/konvajs/ng2-konva) that, as for now, seems not to be maintaned.

- [Konva API implementation status](#konva-api-implementation-status)
- [Example usage](#example-usage)
- [Stage autoscale](#stage-autoscale)
- [Events handling](#events-handling)
  - [KoHoverDirective](#kohoverdirective)


## Konva API implementation status

| API                                                                        | Status | Component            |
| -------------------------------------------------------------------------- | ------ | -------------------- |
| [`Stage`](https://konvajs.org/api/Konva.Stage.html#main)                   | ✅      | `ko-stage`           |
| [`Layer`](https://konvajs.org/api/Konva.Layer.html#main)                   | ✅      | `ko-layer`           |
| [`Rect`](https://konvajs.org/api/Konva.Rect.html#main)                     | ✅      | `ko-rect`            |
| [`Circle`](https://konvajs.org/api/Konva.Circle.html#main)                 | ✅      | `ko-circle`          |
| [`Line`](https://konvajs.org/api/Konva.Line.html#main)                     | ✅      | `ko-line`            |
| [`RegularPolygon`](https://konvajs.org/api/Konva.RegularPolygon.html#main) | ✅      | `ko-regular-polygon` |
| [`Text`](https://konvajs.org/api/Konva.Text.html#main)                     | ✅      | `ko-text`            |
| [`TextPath`](https://konvajs.org/api/Konva.TextPath.html#main)             | ❌      |                      |
| [`Ellipse`](https://konvajs.org/api/Konva.Ellipse.html#main)               | ❌      |                      |
| [`Group`](https://konvajs.org/api/Konva.Group.html#main)                   | ❌      |                      |
| [`Ring`](https://konvajs.org/api/Konva.Ring.html#main)                     | ❌      |                      |
| [`Image`](https://konvajs.org/api/Konva.Image.html#main)                   | ❌      |                      |
| [`Label`](https://konvajs.org/api/Konva.Label.html#main)                   | ❌      |                      |
| [`Path`](https://konvajs.org/api/Konva.Path.html#main)                     | ❌      |                      |
| [`Sprite`](https://konvajs.org/api/Konva.Sprite.html#main)                 | ❌      |                      |
| [`Star`](https://konvajs.org/api/Konva.Star.html#main)                     | ❌      |                      |
| [`Tween`](https://konvajs.org/api/Konva.Tween.html#main)                   | ❌      |                      |

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
      </ko-layer>
</ko-stage>
```

Each item has an @Input `config` you can use dynamically to change the configuration of the Node.
All properties allowed are handled by `config`, but if you need to change the `id` of a Node use the related `id` @Input.
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

## Events handling

In order to avoid consuming memory setting up unused listeners, the Node events are handled through directives.

These are the directives you can use:

### KoHoverDirective

Compatible with `ko-rect`, `ko-line`, `ko-circle`, `ko-regular-polygon`, `ko-text`.

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