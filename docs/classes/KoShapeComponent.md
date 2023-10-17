[ngx-konva](../README.md) / [Exports](../modules.md) / KoShapeComponent

# Class: KoShapeComponent

## Hierarchy

- `KoNestable`

  ↳ **`KoShapeComponent`**

## Implements

- `OnInit`

## Table of contents

### Constructors

- [constructor](KoShapeComponent.md#constructor)

### Properties

- [\_config](KoShapeComponent.md#_config)
- [afterUpdate](KoShapeComponent.md#afterupdate)
- [beforeUpdate](KoShapeComponent.md#beforeupdate)
- [centerOrigin](KoShapeComponent.md#centerorigin)
- [elementRef](KoShapeComponent.md#elementref)
- [id](KoShapeComponent.md#id)
- [selector](KoShapeComponent.md#selector)
- [shape](KoShapeComponent.md#shape)

### Accessors

- [config](KoShapeComponent.md#config)

### Methods

- [\_afterRender](KoShapeComponent.md#_afterrender)
- [\_beforeRender](KoShapeComponent.md#_beforerender)
- [getKoItem](KoShapeComponent.md#getkoitem)
- [ngOnDestroy](KoShapeComponent.md#ngondestroy)
- [ngOnInit](KoShapeComponent.md#ngoninit)
- [updateShape](KoShapeComponent.md#updateshape)

## Constructors

### constructor

• **new KoShapeComponent**(`elementRef`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementRef` | `ElementRef`<`HTMLElement`\> |

#### Overrides

KoNestable.constructor

#### Defined in

[lib/ko-shape.component.ts:45](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-shape.component.ts#L45)

## Properties

### \_config

• `Private` **\_config**: `CircleConfig` \| `LineConfig` \| `RectConfig` \| `RegularPolygonConfig` \| `TextConfig` = `{}`

#### Defined in

[lib/ko-shape.component.ts:26](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-shape.component.ts#L26)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`<[`KoShape`](../modules.md#koshape)\>

#### Defined in

[lib/ko-shape.component.ts:41](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-shape.component.ts#L41)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<[`KoShape`](../modules.md#koshape)\>

#### Defined in

[lib/ko-shape.component.ts:38](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-shape.component.ts#L38)

___

### centerOrigin

• **centerOrigin**: `boolean` = `false`

#### Defined in

[lib/ko-shape.component.ts:35](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-shape.component.ts#L35)

___

### elementRef

• `Private` **elementRef**: `ElementRef`<`HTMLElement`\>

#### Defined in

[lib/ko-shape.component.ts:46](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-shape.component.ts#L46)

___

### id

• **id**: `string`

#### Inherited from

KoNestable.id

#### Defined in

[lib/ko-nestable.ts:8](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-nestable.ts#L8)

___

### selector

• **selector**: ``"ko-circle"`` \| ``"ko-line"`` \| ``"ko-rect"`` \| ``"ko-text"`` \| ``"ko-regular-polygon"``

#### Defined in

[lib/ko-shape.component.ts:43](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-shape.component.ts#L43)

___

### shape

• **shape**: [`KoShape`](../modules.md#koshape)

#### Defined in

[lib/ko-shape.component.ts:24](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-shape.component.ts#L24)

## Accessors

### config

• `set` **config**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `CircleConfig` \| `LineConfig` \| `RectConfig` \| `RegularPolygonConfig` \| `TextConfig` |

#### Returns

`void`

#### Defined in

[lib/ko-shape.component.ts:28](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-shape.component.ts#L28)

## Methods

### \_afterRender

▸ `Private` **_afterRender**(): `void`

#### Returns

`void`

#### Defined in

[lib/ko-shape.component.ts:72](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-shape.component.ts#L72)

___

### \_beforeRender

▸ `Private` **_beforeRender**(): `void`

#### Returns

`void`

#### Defined in

[lib/ko-shape.component.ts:68](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-shape.component.ts#L68)

___

### getKoItem

▸ **getKoItem**(): [`KoShape`](../modules.md#koshape)

#### Returns

[`KoShape`](../modules.md#koshape)

#### Overrides

KoNestable.getKoItem

#### Defined in

[lib/ko-shape.component.ts:57](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-shape.component.ts#L57)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Inherited from

KoNestable.ngOnDestroy

#### Defined in

[lib/ko-nestable.ts:17](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-nestable.ts#L17)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Overrides

KoNestable.ngOnInit

#### Defined in

[lib/ko-shape.component.ts:53](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-shape.component.ts#L53)

___

### updateShape

▸ `Private` **updateShape**(): `void`

#### Returns

`void`

#### Defined in

[lib/ko-shape.component.ts:61](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-shape.component.ts#L61)
