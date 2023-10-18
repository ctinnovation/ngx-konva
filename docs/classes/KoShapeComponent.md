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

[lib/components/ko-shape.component.ts:50](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L50)

## Properties

### \_config

• `Private` **\_config**: `ShapeConfig` \| `ArcConfig` \| `LineConfig` \| `ArrowConfig` \| `CircleConfig` \| `EllipseConfig` \| `PathConfig` \| `RectConfig` \| `RegularPolygonConfig` \| `RingConfig` \| `StarConfig` \| `TextConfig` \| `TextPathConfig` \| `WedgeConfig` = `{}`

#### Defined in

[lib/components/ko-shape.component.ts:31](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L31)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`<[`KoShape`](../modules.md#koshape)\>

#### Defined in

[lib/components/ko-shape.component.ts:46](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L46)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<[`KoShape`](../modules.md#koshape)\>

#### Defined in

[lib/components/ko-shape.component.ts:43](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L43)

___

### centerOrigin

• **centerOrigin**: `boolean` = `false`

#### Defined in

[lib/components/ko-shape.component.ts:40](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L40)

___

### elementRef

• `Private` **elementRef**: `ElementRef`<`HTMLElement`\>

#### Defined in

[lib/components/ko-shape.component.ts:51](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L51)

___

### id

• **id**: `string`

#### Inherited from

KoNestable.id

#### Defined in

[lib/common/ko-nestable.ts:13](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/common/ko-nestable.ts#L13)

___

### selector

• **selector**: ``"ko-circle"`` \| ``"ko-ellipse"`` \| ``"ko-line"`` \| ``"ko-path"`` \| ``"ko-rect"`` \| ``"ko-text"`` \| ``"ko-arc"`` \| ``"ko-regular-polygon"`` \| ``"ko-arrow"`` \| ``"ko-star"`` \| ``"ko-ring"`` \| ``"ko-shape"`` \| ``"ko-text-path"`` \| ``"ko-wedge"``

#### Defined in

[lib/components/ko-shape.component.ts:48](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L48)

___

### shape

• **shape**: [`KoShape`](../modules.md#koshape)

#### Defined in

[lib/components/ko-shape.component.ts:29](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L29)

## Accessors

### config

• `set` **config**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `ShapeConfig` \| `ArcConfig` \| `LineConfig` \| `ArrowConfig` \| `CircleConfig` \| `EllipseConfig` \| `PathConfig` \| `RectConfig` \| `RegularPolygonConfig` \| `RingConfig` \| `StarConfig` \| `TextConfig` \| `TextPathConfig` \| `WedgeConfig` |

#### Returns

`void`

#### Defined in

[lib/components/ko-shape.component.ts:33](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L33)

## Methods

### \_afterRender

▸ `Private` **_afterRender**(): `void`

#### Returns

`void`

#### Defined in

[lib/components/ko-shape.component.ts:77](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L77)

___

### \_beforeRender

▸ `Private` **_beforeRender**(): `void`

#### Returns

`void`

#### Defined in

[lib/components/ko-shape.component.ts:73](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L73)

___

### getKoItem

▸ **getKoItem**(): [`KoShape`](../modules.md#koshape)

#### Returns

[`KoShape`](../modules.md#koshape)

#### Overrides

KoNestable.getKoItem

#### Defined in

[lib/components/ko-shape.component.ts:62](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L62)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Inherited from

KoNestable.ngOnDestroy

#### Defined in

[lib/common/ko-nestable.ts:22](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/common/ko-nestable.ts#L22)

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

[lib/components/ko-shape.component.ts:58](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L58)

___

### updateShape

▸ `Private` **updateShape**(): `void`

#### Returns

`void`

#### Defined in

[lib/components/ko-shape.component.ts:66](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L66)
