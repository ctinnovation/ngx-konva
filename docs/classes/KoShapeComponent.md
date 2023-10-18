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

[lib/components/ko-shape.component.ts:41](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L41)

## Properties

### \_config

• `Private` **\_config**: `CircleConfig` \| `LineConfig` \| `RectConfig` \| `RegularPolygonConfig` \| `TextConfig` = `{}`

#### Defined in

[lib/components/ko-shape.component.ts:22](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L22)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`<[`KoShape`](../modules.md#koshape)\>

#### Defined in

[lib/components/ko-shape.component.ts:37](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L37)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<[`KoShape`](../modules.md#koshape)\>

#### Defined in

[lib/components/ko-shape.component.ts:34](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L34)

___

### centerOrigin

• **centerOrigin**: `boolean` = `false`

#### Defined in

[lib/components/ko-shape.component.ts:31](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L31)

___

### elementRef

• `Private` **elementRef**: `ElementRef`<`HTMLElement`\>

#### Defined in

[lib/components/ko-shape.component.ts:42](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L42)

___

### id

• **id**: `string`

#### Inherited from

KoNestable.id

#### Defined in

[lib/common/ko-nestable.ts:12](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/common/ko-nestable.ts#L12)

___

### selector

• **selector**: ``"ko-circle"`` \| ``"ko-line"`` \| ``"ko-rect"`` \| ``"ko-text"`` \| ``"ko-regular-polygon"``

#### Defined in

[lib/components/ko-shape.component.ts:39](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L39)

___

### shape

• **shape**: [`KoShape`](../modules.md#koshape)

#### Defined in

[lib/components/ko-shape.component.ts:20](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L20)

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

[lib/components/ko-shape.component.ts:24](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L24)

## Methods

### \_afterRender

▸ `Private` **_afterRender**(): `void`

#### Returns

`void`

#### Defined in

[lib/components/ko-shape.component.ts:68](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L68)

___

### \_beforeRender

▸ `Private` **_beforeRender**(): `void`

#### Returns

`void`

#### Defined in

[lib/components/ko-shape.component.ts:64](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L64)

___

### getKoItem

▸ **getKoItem**(): [`KoShape`](../modules.md#koshape)

#### Returns

[`KoShape`](../modules.md#koshape)

#### Overrides

KoNestable.getKoItem

#### Defined in

[lib/components/ko-shape.component.ts:53](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L53)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Inherited from

KoNestable.ngOnDestroy

#### Defined in

[lib/common/ko-nestable.ts:21](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/common/ko-nestable.ts#L21)

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

[lib/components/ko-shape.component.ts:49](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L49)

___

### updateShape

▸ `Private` **updateShape**(): `void`

#### Returns

`void`

#### Defined in

[lib/components/ko-shape.component.ts:57](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L57)
