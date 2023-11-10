[ngx-konva](../README.md) / [Exports](../modules.md) / KoNestable

# Class: KoNestable

## Hierarchy

- **`KoNestable`**

  ↳ [`KoGroupComponent`](KoGroupComponent.md)

  ↳ [`KoImageComponent`](KoImageComponent.md)

  ↳ [`KoLabelComponent`](KoLabelComponent.md)

  ↳ [`KoLayerComponent`](KoLayerComponent.md)

  ↳ [`KoShapeComponent`](KoShapeComponent.md)

## Implements

- `OnInit`
- `OnDestroy`

## Table of contents

### Constructors

- [constructor](KoNestable.md#constructor)

### Properties

- [\_initialSetConfig](KoNestable.md#_initialsetconfig)
- [\_tween](KoNestable.md#_tween)
- [\_tweenTimeout](KoNestable.md#_tweentimeout)
- [id](KoNestable.md#id)
- [sub](KoNestable.md#sub)
- [transitionDelay](KoNestable.md#transitiondelay)
- [transitionOnFinish](KoNestable.md#transitiononfinish)
- [transitionOnUpdate](KoNestable.md#transitiononupdate)
- [transitionWith](KoNestable.md#transitionwith)
- [Easings](KoNestable.md#easings)

### Methods

- [getKoItem](KoNestable.md#getkoitem)
- [ngOnDestroy](KoNestable.md#ngondestroy)
- [ngOnInit](KoNestable.md#ngoninit)
- [setConfig](KoNestable.md#setconfig)

## Constructors

### constructor

• **new KoNestable**()

## Properties

### \_initialSetConfig

• `Private` **\_initialSetConfig**: `boolean` = `true`

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:36](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L36)

___

### \_tween

• `Protected` `Optional` **\_tween**: `Tween`

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:34](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L34)

___

### \_tweenTimeout

• `Protected` `Optional` **\_tweenTimeout**: `any`

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:35](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L35)

___

### id

• **id**: `string`

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:18](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L18)

___

### sub

• `Protected` **sub**: `Subscription`

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:32](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L32)

___

### transitionDelay

• **transitionDelay**: `number` = `0`

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:24](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L24)

___

### transitionOnFinish

• **transitionOnFinish**: `EventEmitter`<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:30](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L30)

___

### transitionOnUpdate

• **transitionOnUpdate**: `EventEmitter`<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:27](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L27)

___

### transitionWith

• `Optional` **transitionWith**: `Omit`<`TweenConfig`, ``"onFinish"`` \| ``"onUpdate"`` \| ``"node"``\>

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:21](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L21)

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

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:15](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L15)

## Methods

### getKoItem

▸ **getKoItem**(): [`KoNestableNode`](../modules.md#konestablenode)

#### Returns

[`KoNestableNode`](../modules.md#konestablenode)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:38](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L38)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:44](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L44)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:42](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L42)

___

### setConfig

▸ **setConfig**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`KoNestableConfig`](../modules.md#konestableconfig) |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:49](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L49)
