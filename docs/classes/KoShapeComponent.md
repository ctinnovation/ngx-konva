[ngx-konva](../README.md) / [Exports](../modules.md) / KoShapeComponent

# Class: KoShapeComponent

## Hierarchy

- [`KoNestable`](KoNestable.md)

  ↳ **`KoShapeComponent`**

## Implements

- `OnInit`

## Table of contents

### Constructors

- [constructor](KoShapeComponent.md#constructor)

### Properties

- [\_config](KoShapeComponent.md#_config)
- [\_tween](KoShapeComponent.md#_tween)
- [\_tweenTimeout](KoShapeComponent.md#_tweentimeout)
- [afterUpdate](KoShapeComponent.md#afterupdate)
- [beforeUpdate](KoShapeComponent.md#beforeupdate)
- [centerOrigin](KoShapeComponent.md#centerorigin)
- [elementRef](KoShapeComponent.md#elementref)
- [groupComponent](KoShapeComponent.md#groupcomponent)
- [id](KoShapeComponent.md#id)
- [layerComponent](KoShapeComponent.md#layercomponent)
- [selector](KoShapeComponent.md#selector)
- [shape](KoShapeComponent.md#shape)
- [sub](KoShapeComponent.md#sub)
- [transitionDelay](KoShapeComponent.md#transitiondelay)
- [transitionOnFinish](KoShapeComponent.md#transitiononfinish)
- [transitionOnUpdate](KoShapeComponent.md#transitiononupdate)
- [transitionWith](KoShapeComponent.md#transitionwith)
- [Easings](KoShapeComponent.md#easings)

### Accessors

- [config](KoShapeComponent.md#config)

### Methods

- [\_afterRender](KoShapeComponent.md#_afterrender)
- [\_beforeRender](KoShapeComponent.md#_beforerender)
- [getKoItem](KoShapeComponent.md#getkoitem)
- [ngOnDestroy](KoShapeComponent.md#ngondestroy)
- [ngOnInit](KoShapeComponent.md#ngoninit)
- [setConfig](KoShapeComponent.md#setconfig)
- [updateShape](KoShapeComponent.md#updateshape)

## Constructors

### constructor

• **new KoShapeComponent**(`elementRef`, `layerComponent`, `groupComponent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementRef` | `ElementRef`<`HTMLElement`\> |
| `layerComponent` | [`KoLayerComponent`](KoLayerComponent.md) |
| `groupComponent` | [`KoGroupComponent`](KoGroupComponent.md) |

#### Overrides

[KoNestable](KoNestable.md).[constructor](KoNestable.md#constructor)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-shape.component.ts:40](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L40)

## Properties

### \_config

• `Private` **\_config**: [`KoShapeConfig`](../modules.md#koshapeconfig)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-shape.component.ts:19](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L19)

___

### \_tween

• `Protected` `Optional` **\_tween**: `Tween`

#### Inherited from

[KoNestable](KoNestable.md).[_tween](KoNestable.md#_tween)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:34](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/common/ko-nestable.ts#L34)

___

### \_tweenTimeout

• `Protected` `Optional` **\_tweenTimeout**: `any`

#### Inherited from

[KoNestable](KoNestable.md).[_tweenTimeout](KoNestable.md#_tweentimeout)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:35](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/common/ko-nestable.ts#L35)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`<[`KoShape`](../modules.md#koshape)\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-shape.component.ts:36](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L36)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<[`KoShape`](../modules.md#koshape)\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-shape.component.ts:33](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L33)

___

### centerOrigin

• **centerOrigin**: `boolean` = `false`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-shape.component.ts:30](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L30)

___

### elementRef

• `Private` **elementRef**: `ElementRef`<`HTMLElement`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-shape.component.ts:41](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L41)

___

### groupComponent

• `Private` **groupComponent**: [`KoGroupComponent`](KoGroupComponent.md)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-shape.component.ts:43](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L43)

___

### id

• **id**: `string`

#### Inherited from

[KoNestable](KoNestable.md).[id](KoNestable.md#id)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:18](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/common/ko-nestable.ts#L18)

___

### layerComponent

• `Private` **layerComponent**: [`KoLayerComponent`](KoLayerComponent.md)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-shape.component.ts:42](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L42)

___

### selector

• **selector**: ``"ko-circle"`` \| ``"ko-ellipse"`` \| ``"ko-line"`` \| ``"ko-path"`` \| ``"ko-rect"`` \| ``"ko-text"`` \| ``"ko-arc"`` \| ``"ko-regular-polygon"`` \| ``"ko-arrow"`` \| ``"ko-star"`` \| ``"ko-ring"`` \| ``"ko-shape"`` \| ``"ko-text-path"`` \| ``"ko-wedge"``

#### Defined in

[projects/ngx-konva/src/lib/components/ko-shape.component.ts:38](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L38)

___

### shape

• **shape**: [`KoShape`](../modules.md#koshape)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-shape.component.ts:17](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L17)

___

### sub

• `Protected` **sub**: `Subscription`

#### Inherited from

[KoNestable](KoNestable.md).[sub](KoNestable.md#sub)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:32](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/common/ko-nestable.ts#L32)

___

### transitionDelay

• **transitionDelay**: `number` = `0`

#### Inherited from

[KoNestable](KoNestable.md).[transitionDelay](KoNestable.md#transitiondelay)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:24](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/common/ko-nestable.ts#L24)

___

### transitionOnFinish

• **transitionOnFinish**: `EventEmitter`<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Inherited from

[KoNestable](KoNestable.md).[transitionOnFinish](KoNestable.md#transitiononfinish)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:30](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/common/ko-nestable.ts#L30)

___

### transitionOnUpdate

• **transitionOnUpdate**: `EventEmitter`<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Inherited from

[KoNestable](KoNestable.md).[transitionOnUpdate](KoNestable.md#transitiononupdate)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:27](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/common/ko-nestable.ts#L27)

___

### transitionWith

• `Optional` **transitionWith**: `Omit`<`TweenConfig`, ``"onFinish"`` \| ``"onUpdate"`` \| ``"node"``\>

#### Inherited from

[KoNestable](KoNestable.md).[transitionWith](KoNestable.md#transitionwith)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:21](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/common/ko-nestable.ts#L21)

___

### Easings

▪ `Static` **Easings**: `Object` = `Easings`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BackEaseIn` | (`t`: `any`, `b`: `any`, `c`: `any`, `d`: `any`) => `any` |
| `BackEaseInOut` | (`t`: `any`, `b`: `any`, `c`: `any`, `d`: `any`) => `any` |
| `BackEaseOut` | (`t`: `any`, `b`: `any`, `c`: `any`, `d`: `any`) => `any` |
| `BounceEaseIn` | (`t`: `any`, `b`: `any`, `c`: `any`, `d`: `any`) => `any` |
| `BounceEaseInOut` | (`t`: `any`, `b`: `any`, `c`: `any`, `d`: `any`) => `any` |
| `BounceEaseOut` | (`t`: `any`, `b`: `any`, `c`: `any`, `d`: `any`) => `any` |
| `EaseIn` | (`t`: `any`, `b`: `any`, `c`: `any`, `d`: `any`) => `any` |
| `EaseInOut` | (`t`: `any`, `b`: `any`, `c`: `any`, `d`: `any`) => `any` |
| `EaseOut` | (`t`: `any`, `b`: `any`, `c`: `any`, `d`: `any`) => `any` |
| `ElasticEaseIn` | (`t`: `any`, `b`: `any`, `c`: `any`, `d`: `any`, `a`: `any`, `p`: `any`) => `any` |
| `ElasticEaseInOut` | (`t`: `any`, `b`: `any`, `c`: `any`, `d`: `any`, `a`: `any`, `p`: `any`) => `any` |
| `ElasticEaseOut` | (`t`: `any`, `b`: `any`, `c`: `any`, `d`: `any`, `a`: `any`, `p`: `any`) => `any` |
| `Linear` | (`t`: `any`, `b`: `any`, `c`: `any`, `d`: `any`) => `any` |
| `StrongEaseIn` | (`t`: `any`, `b`: `any`, `c`: `any`, `d`: `any`) => `any` |
| `StrongEaseInOut` | (`t`: `any`, `b`: `any`, `c`: `any`, `d`: `any`) => `any` |
| `StrongEaseOut` | (`t`: `any`, `b`: `any`, `c`: `any`, `d`: `any`) => `any` |

#### Inherited from

[KoNestable](KoNestable.md).[Easings](KoNestable.md#easings)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:15](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/common/ko-nestable.ts#L15)

## Accessors

### config

• `set` **config**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`KoShapeConfig`](../modules.md#koshapeconfig) |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-shape.component.ts:23](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L23)

## Methods

### \_afterRender

▸ `Private` **_afterRender**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-shape.component.ts:73](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L73)

___

### \_beforeRender

▸ `Private` **_beforeRender**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-shape.component.ts:69](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L69)

___

### getKoItem

▸ **getKoItem**(): [`KoShape`](../modules.md#koshape)

#### Returns

[`KoShape`](../modules.md#koshape)

#### Overrides

[KoNestable](KoNestable.md).[getKoItem](KoNestable.md#getkoitem)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-shape.component.ts:59](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L59)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Inherited from

[KoNestable](KoNestable.md).[ngOnDestroy](KoNestable.md#ngondestroy)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:44](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/common/ko-nestable.ts#L44)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Overrides

[KoNestable](KoNestable.md).[ngOnInit](KoNestable.md#ngoninit)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-shape.component.ts:55](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L55)

___

### setConfig

▸ **setConfig**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`KoNestableConfig`](../modules.md#konestableconfig) |

#### Returns

`void`

#### Inherited from

[KoNestable](KoNestable.md).[setConfig](KoNestable.md#setconfig)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:49](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/common/ko-nestable.ts#L49)

___

### updateShape

▸ `Private` **updateShape**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-shape.component.ts:63](https://github.com/ctinnovation/ngx-konva/blob/4fde6f6/projects/ngx-konva/src/lib/components/ko-shape.component.ts#L63)
