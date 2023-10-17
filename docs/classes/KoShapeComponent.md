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

[lib/ko-shape.component.ts:44](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-shape.component.ts#L44)

## Properties

### \_config

• `Private` **\_config**: `CircleConfig` \| `LineConfig` \| `RectConfig` \| `RegularPolygonConfig` \| `TextConfig` = `{}`

#### Defined in

[lib/ko-shape.component.ts:25](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-shape.component.ts#L25)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`<`Shape`\>

#### Defined in

[lib/ko-shape.component.ts:40](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-shape.component.ts#L40)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<`Shape`\>

#### Defined in

[lib/ko-shape.component.ts:37](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-shape.component.ts#L37)

___

### centerOrigin

• **centerOrigin**: `boolean` = `false`

#### Defined in

[lib/ko-shape.component.ts:34](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-shape.component.ts#L34)

___

### elementRef

• `Private` **elementRef**: `ElementRef`<`HTMLElement`\>

#### Defined in

[lib/ko-shape.component.ts:45](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-shape.component.ts#L45)

___

### id

• **id**: `string`

#### Inherited from

KoNestable.id

#### Defined in

[lib/ko-nestable.ts:24](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-nestable.ts#L24)

___

### selector

• **selector**: ``"ko-circle"`` \| ``"ko-line"`` \| ``"ko-rect"`` \| ``"ko-text"`` \| ``"ko-regular-polygon"``

#### Defined in

[lib/ko-shape.component.ts:42](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-shape.component.ts#L42)

___

### shape

• **shape**: `Shape`

#### Defined in

[lib/ko-shape.component.ts:23](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-shape.component.ts#L23)

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

[lib/ko-shape.component.ts:27](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-shape.component.ts#L27)

## Methods

### \_afterRender

▸ `Private` **_afterRender**(): `void`

#### Returns

`void`

#### Defined in

[lib/ko-shape.component.ts:71](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-shape.component.ts#L71)

___

### \_beforeRender

▸ `Private` **_beforeRender**(): `void`

#### Returns

`void`

#### Defined in

[lib/ko-shape.component.ts:67](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-shape.component.ts#L67)

___

### getKoItem

▸ **getKoItem**(): `Shape`

#### Returns

`Shape`

#### Overrides

KoNestable.getKoItem

#### Defined in

[lib/ko-shape.component.ts:56](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-shape.component.ts#L56)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Inherited from

KoNestable.ngOnDestroy

#### Defined in

[lib/ko-nestable.ts:33](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-nestable.ts#L33)

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

[lib/ko-shape.component.ts:52](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-shape.component.ts#L52)

___

### updateShape

▸ `Private` **updateShape**(): `void`

#### Returns

`void`

#### Defined in

[lib/ko-shape.component.ts:60](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-shape.component.ts#L60)
