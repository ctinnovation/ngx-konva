[ngx-konva](../README.md) / [Exports](../modules.md) / KoImageComponent

# Class: KoImageComponent

## Hierarchy

- [`KoNestable`](KoNestable.md)

  ↳ **`KoImageComponent`**

## Implements

- `OnInit`

## Table of contents

### Constructors

- [constructor](KoImageComponent.md#constructor)

### Properties

- [\_config](KoImageComponent.md#_config)
- [\_image](KoImageComponent.md#_image)
- [\_src](KoImageComponent.md#_src)
- [\_tween](KoImageComponent.md#_tween)
- [\_tweenTimeout](KoImageComponent.md#_tweentimeout)
- [afterUpdate](KoImageComponent.md#afterupdate)
- [beforeUpdate](KoImageComponent.md#beforeupdate)
- [centerOrigin](KoImageComponent.md#centerorigin)
- [groupComponent](KoImageComponent.md#groupcomponent)
- [id](KoImageComponent.md#id)
- [layerComponent](KoImageComponent.md#layercomponent)
- [node](KoImageComponent.md#node)
- [onLoadListener](KoImageComponent.md#onloadlistener)
- [sub](KoImageComponent.md#sub)
- [transitionDelay](KoImageComponent.md#transitiondelay)
- [transitionOnFinish](KoImageComponent.md#transitiononfinish)
- [transitionOnUpdate](KoImageComponent.md#transitiononupdate)
- [transitionWith](KoImageComponent.md#transitionwith)
- [Easings](KoImageComponent.md#easings)

### Accessors

- [config](KoImageComponent.md#config)
- [src](KoImageComponent.md#src)

### Methods

- [\_afterRender](KoImageComponent.md#_afterrender)
- [\_beforeRender](KoImageComponent.md#_beforerender)
- [getKoItem](KoImageComponent.md#getkoitem)
- [ngOnDestroy](KoImageComponent.md#ngondestroy)
- [ngOnInit](KoImageComponent.md#ngoninit)
- [onImageLoad](KoImageComponent.md#onimageload)
- [setConfig](KoImageComponent.md#setconfig)
- [updateShape](KoImageComponent.md#updateshape)

## Constructors

### constructor

• **new KoImageComponent**(`layerComponent`, `groupComponent`): [`KoImageComponent`](KoImageComponent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerComponent` | [`KoLayerComponent`](KoLayerComponent.md) |
| `groupComponent` | [`KoGroupComponent`](KoGroupComponent.md) |

#### Returns

[`KoImageComponent`](KoImageComponent.md)

#### Overrides

[KoNestable](KoNestable.md).[constructor](KoNestable.md#constructor)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:61](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L61)

## Properties

### \_config

• `Private` **\_config**: [`KoNestableConfig`](../modules.md#konestableconfig)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:36](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L36)

___

### \_image

• `Private` **\_image**: `HTMLImageElement`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:23](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L23)

___

### \_src

• `Private` **\_src**: `string` = `''`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:25](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L25)

___

### \_tween

• `Protected` `Optional` **\_tween**: `Tween`

#### Inherited from

[KoNestable](KoNestable.md).[_tween](KoNestable.md#_tween)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:34](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/common/ko-nestable.ts#L34)

___

### \_tweenTimeout

• `Protected` `Optional` **\_tweenTimeout**: `any`

#### Inherited from

[KoNestable](KoNestable.md).[_tweenTimeout](KoNestable.md#_tweentimeout)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:35](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/common/ko-nestable.ts#L35)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`\<[`KoShape`](../modules.md#koshape)\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:57](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L57)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`\<[`KoShape`](../modules.md#koshape)\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:54](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L54)

___

### centerOrigin

• **centerOrigin**: `boolean` = `false`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:51](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L51)

___

### groupComponent

• `Private` **groupComponent**: [`KoGroupComponent`](KoGroupComponent.md)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:63](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L63)

___

### id

• **id**: `string`

#### Inherited from

[KoNestable](KoNestable.md).[id](KoNestable.md#id)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:18](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/common/ko-nestable.ts#L18)

___

### layerComponent

• `Private` **layerComponent**: [`KoLayerComponent`](KoLayerComponent.md)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:62](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L62)

___

### node

• **node**: `Image`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:21](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L21)

___

### onLoadListener

• **onLoadListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:59](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L59)

___

### sub

• `Protected` **sub**: `Subscription`

#### Inherited from

[KoNestable](KoNestable.md).[sub](KoNestable.md#sub)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:32](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/common/ko-nestable.ts#L32)

___

### transitionDelay

• **transitionDelay**: `number` = `0`

#### Inherited from

[KoNestable](KoNestable.md).[transitionDelay](KoNestable.md#transitiondelay)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:24](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/common/ko-nestable.ts#L24)

___

### transitionOnFinish

• **transitionOnFinish**: `EventEmitter`\<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Inherited from

[KoNestable](KoNestable.md).[transitionOnFinish](KoNestable.md#transitiononfinish)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:30](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/common/ko-nestable.ts#L30)

___

### transitionOnUpdate

• **transitionOnUpdate**: `EventEmitter`\<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Inherited from

[KoNestable](KoNestable.md).[transitionOnUpdate](KoNestable.md#transitiononupdate)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:27](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/common/ko-nestable.ts#L27)

___

### transitionWith

• `Optional` **transitionWith**: `Omit`\<`TweenConfig`, ``"onFinish"`` \| ``"onUpdate"`` \| ``"node"``\>

#### Inherited from

[KoNestable](KoNestable.md).[transitionWith](KoNestable.md#transitionwith)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:21](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/common/ko-nestable.ts#L21)

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

[projects/ngx-konva/src/lib/common/ko-nestable.ts:15](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/common/ko-nestable.ts#L15)

## Accessors

### config

• `set` **config**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`KoNestableConfig`](../modules.md#konestableconfig) |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:40](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L40)

___

### src

• `set` **src**(`s`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:27](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L27)

## Methods

### \_afterRender

▸ **_afterRender**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:99](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L99)

___

### \_beforeRender

▸ **_beforeRender**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:95](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L95)

___

### getKoItem

▸ **getKoItem**(): [`KoShape`](../modules.md#koshape)

#### Returns

[`KoShape`](../modules.md#koshape)

#### Overrides

[KoNestable](KoNestable.md).[getKoItem](KoNestable.md#getkoitem)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:83](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L83)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Overrides

[KoNestable](KoNestable.md).[ngOnDestroy](KoNestable.md#ngondestroy)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:78](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L78)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Inherited from

[KoNestable](KoNestable.md).[ngOnInit](KoNestable.md#ngoninit)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:42](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/common/ko-nestable.ts#L42)

___

### onImageLoad

▸ **onImageLoad**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:108](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L108)

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

[projects/ngx-konva/src/lib/common/ko-nestable.ts:49](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/common/ko-nestable.ts#L49)

___

### updateShape

▸ **updateShape**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-image.component.ts:87](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-image.component.ts#L87)
