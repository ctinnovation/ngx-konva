[ngx-konva](../README.md) / [Exports](../modules.md) / KoLayerComponent

# Class: KoLayerComponent

## Hierarchy

- [`KoNestable`](KoNestable.md)

  ↳ **`KoLayerComponent`**

## Implements

- `OnInit`
- `OnDestroy`
- `AfterViewInit`

## Table of contents

### Constructors

- [constructor](KoLayerComponent.md#constructor)

### Properties

- [\_config](KoLayerComponent.md#_config)
- [\_tween](KoLayerComponent.md#_tween)
- [\_tweenTimeout](KoLayerComponent.md#_tweentimeout)
- [afterUpdate](KoLayerComponent.md#afterupdate)
- [beforeUpdate](KoLayerComponent.md#beforeupdate)
- [children](KoLayerComponent.md#children)
- [id](KoLayerComponent.md#id)
- [layer](KoLayerComponent.md#layer)
- [onNewItem](KoLayerComponent.md#onnewitem)
- [sub](KoLayerComponent.md#sub)
- [transitionDelay](KoLayerComponent.md#transitiondelay)
- [transitionOnFinish](KoLayerComponent.md#transitiononfinish)
- [transitionOnUpdate](KoLayerComponent.md#transitiononupdate)
- [transitionWith](KoLayerComponent.md#transitionwith)
- [Easings](KoLayerComponent.md#easings)

### Accessors

- [config](KoLayerComponent.md#config)

### Methods

- [getKoItem](KoLayerComponent.md#getkoitem)
- [ngAfterViewInit](KoLayerComponent.md#ngafterviewinit)
- [ngOnDestroy](KoLayerComponent.md#ngondestroy)
- [ngOnInit](KoLayerComponent.md#ngoninit)
- [setConfig](KoLayerComponent.md#setconfig)
- [updateChildren](KoLayerComponent.md#updatechildren)
- [updateLayer](KoLayerComponent.md#updatelayer)

## Constructors

### constructor

• **new KoLayerComponent**()

#### Overrides

[KoNestable](KoNestable.md).[constructor](KoNestable.md#constructor)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:41](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L41)

## Properties

### \_config

• `Private` **\_config**: [`KoNestableConfig`](../modules.md#konestableconfig) = `{}`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:23](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L23)

___

### \_tween

• `Protected` `Optional` **\_tween**: `Tween`

#### Inherited from

[KoNestable](KoNestable.md).[_tween](KoNestable.md#_tween)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:33](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/common/ko-nestable.ts#L33)

___

### \_tweenTimeout

• `Protected` `Optional` **\_tweenTimeout**: `any`

#### Inherited from

[KoNestable](KoNestable.md).[_tweenTimeout](KoNestable.md#_tweentimeout)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:34](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/common/ko-nestable.ts#L34)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`<`Layer`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:39](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L39)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<`Layer`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:36](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L36)

___

### children

• **children**: `QueryList`<[`KoNestable`](KoNestable.md)\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:19](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L19)

___

### id

• **id**: `string`

#### Inherited from

[KoNestable](KoNestable.md).[id](KoNestable.md#id)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:17](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/common/ko-nestable.ts#L17)

___

### layer

• **layer**: `Layer`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:21](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L21)

___

### onNewItem

• **onNewItem**: `EventEmitter`<`Layer` \| `Group` \| [`KoShape`](../modules.md#koshape)\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:33](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L33)

___

### sub

• `Protected` **sub**: `Subscription`

#### Inherited from

[KoNestable](KoNestable.md).[sub](KoNestable.md#sub)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:31](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/common/ko-nestable.ts#L31)

___

### transitionDelay

• **transitionDelay**: `number` = `0`

#### Inherited from

[KoNestable](KoNestable.md).[transitionDelay](KoNestable.md#transitiondelay)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:23](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/common/ko-nestable.ts#L23)

___

### transitionOnFinish

• **transitionOnFinish**: `EventEmitter`<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Inherited from

[KoNestable](KoNestable.md).[transitionOnFinish](KoNestable.md#transitiononfinish)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:29](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/common/ko-nestable.ts#L29)

___

### transitionOnUpdate

• **transitionOnUpdate**: `EventEmitter`<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Inherited from

[KoNestable](KoNestable.md).[transitionOnUpdate](KoNestable.md#transitiononupdate)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:26](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/common/ko-nestable.ts#L26)

___

### transitionWith

• `Optional` **transitionWith**: `Omit`<`TweenConfig`, ``"onFinish"`` \| ``"onUpdate"`` \| ``"node"``\>

#### Inherited from

[KoNestable](KoNestable.md).[transitionWith](KoNestable.md#transitionwith)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:20](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/common/ko-nestable.ts#L20)

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

[projects/ngx-konva/src/lib/common/ko-nestable.ts:15](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/common/ko-nestable.ts#L15)

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

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:26](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L26)

## Methods

### getKoItem

▸ **getKoItem**(): `Layer`

#### Returns

`Layer`

#### Overrides

[KoNestable](KoNestable.md).[getKoItem](KoNestable.md#getkoitem)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:57](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L57)

___

### ngAfterViewInit

▸ **ngAfterViewInit**(): `void`

#### Returns

`void`

#### Implementation of

AfterViewInit.ngAfterViewInit

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:50](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L50)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Inherited from

[KoNestable](KoNestable.md).[ngOnDestroy](KoNestable.md#ngondestroy)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:43](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/common/ko-nestable.ts#L43)

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

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:46](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L46)

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

[projects/ngx-konva/src/lib/common/ko-nestable.ts:48](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/common/ko-nestable.ts#L48)

___

### updateChildren

▸ `Private` **updateChildren**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:68](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L68)

___

### updateLayer

▸ **updateLayer**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:61](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L61)
