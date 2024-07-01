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
- [configDefaults](KoNestable.md#configdefaults)
- [id](KoNestable.md#id)
- [koListening](KoNestable.md#kolistening)
- [sub](KoNestable.md#sub)
- [transitionDelay](KoNestable.md#transitiondelay)
- [transitionOnFinish](KoNestable.md#transitiononfinish)
- [transitionOnUpdate](KoNestable.md#transitiononupdate)
- [transitionWith](KoNestable.md#transitionwith)
- [Easings](KoNestable.md#easings)

### Accessors

- [shouldListen](KoNestable.md#shouldlisten)

### Methods

- [getKoItem](KoNestable.md#getkoitem)
- [ngOnDestroy](KoNestable.md#ngondestroy)
- [ngOnInit](KoNestable.md#ngoninit)
- [setConfig](KoNestable.md#setconfig)

## Constructors

### constructor

• **new KoNestable**(`koListening`): [`KoNestable`](KoNestable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `koListening` | `KoListeningDirective` |

#### Returns

[`KoNestable`](KoNestable.md)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:58](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L58)

## Properties

### \_initialSetConfig

• `Private` **\_initialSetConfig**: `boolean` = `true`

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:40](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L40)

___

### \_tween

• `Protected` `Optional` **\_tween**: `Tween`

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:38](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L38)

___

### \_tweenTimeout

• `Protected` `Optional` **\_tweenTimeout**: `any`

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:39](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L39)

___

### configDefaults

• `Protected` **configDefaults**: [`KoShapeConfig`](../modules.md#koshapeconfig)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:46](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L46)

___

### id

• **id**: `string`

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:22](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L22)

___

### koListening

• `Protected` **koListening**: `KoListeningDirective`

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:59](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L59)

___

### sub

• `Protected` **sub**: `Subscription`

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:36](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L36)

___

### transitionDelay

• **transitionDelay**: `number` = `0`

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:28](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L28)

___

### transitionOnFinish

• **transitionOnFinish**: `EventEmitter`\<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:34](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L34)

___

### transitionOnUpdate

• **transitionOnUpdate**: `EventEmitter`\<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:31](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L31)

___

### transitionWith

• `Optional` **transitionWith**: `Omit`\<`TweenConfig`, ``"onFinish"`` \| ``"onUpdate"`` \| ``"node"``\>

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:25](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L25)

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

[projects/ngx-konva/src/lib/common/ko-nestable.ts:19](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L19)

## Accessors

### shouldListen

• `get` **shouldListen**(): `boolean`

#### Returns

`boolean`

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:42](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L42)

## Methods

### getKoItem

▸ **getKoItem**(): [`KoNestableNode`](../modules.md#konestablenode)

#### Returns

[`KoNestableNode`](../modules.md#konestablenode)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:54](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L54)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:64](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L64)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:62](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L62)

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

[projects/ngx-konva/src/lib/common/ko-nestable.ts:76](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L76)
