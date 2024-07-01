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
- [configDefaults](KoLayerComponent.md#configdefaults)
- [draw$](KoLayerComponent.md#draw$)
- [id](KoLayerComponent.md#id)
- [koListening](KoLayerComponent.md#kolistening)
- [layer](KoLayerComponent.md#layer)
- [layerComponent](KoLayerComponent.md#layercomponent)
- [onNewItem](KoLayerComponent.md#onnewitem)
- [stageComponent](KoLayerComponent.md#stagecomponent)
- [sub](KoLayerComponent.md#sub)
- [transitionDelay](KoLayerComponent.md#transitiondelay)
- [transitionOnFinish](KoLayerComponent.md#transitiononfinish)
- [transitionOnUpdate](KoLayerComponent.md#transitiononupdate)
- [transitionWith](KoLayerComponent.md#transitionwith)
- [Easings](KoLayerComponent.md#easings)

### Accessors

- [config](KoLayerComponent.md#config)
- [shouldListen](KoLayerComponent.md#shouldlisten)

### Methods

- [addChild](KoLayerComponent.md#addchild)
- [draw](KoLayerComponent.md#draw)
- [getKoItem](KoLayerComponent.md#getkoitem)
- [ngAfterViewInit](KoLayerComponent.md#ngafterviewinit)
- [ngOnDestroy](KoLayerComponent.md#ngondestroy)
- [ngOnInit](KoLayerComponent.md#ngoninit)
- [setConfig](KoLayerComponent.md#setconfig)
- [updateLayer](KoLayerComponent.md#updatelayer)

## Constructors

### constructor

• **new KoLayerComponent**(`koListening`, `stageComponent?`, `stageAutoComponent?`, `layerComponent?`): [`KoLayerComponent`](KoLayerComponent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `koListening` | `KoListeningDirective` |
| `stageComponent?` | [`KoStageComponent`](KoStageComponent.md) |
| `stageAutoComponent?` | [`KoStageAutoScaleComponent`](KoStageAutoScaleComponent.md) |
| `layerComponent?` | [`KoLayerComponent`](KoLayerComponent.md) |

#### Returns

[`KoLayerComponent`](KoLayerComponent.md)

#### Overrides

[KoNestable](KoNestable.md).[constructor](KoNestable.md#constructor)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:49](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L49)

## Properties

### \_config

• `Private` **\_config**: [`KoNestableConfig`](../modules.md#konestableconfig)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:28](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L28)

___

### \_tween

• `Protected` `Optional` **\_tween**: `Tween`

#### Inherited from

[KoNestable](KoNestable.md).[_tween](KoNestable.md#_tween)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:38](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L38)

___

### \_tweenTimeout

• `Protected` `Optional` **\_tweenTimeout**: `any`

#### Inherited from

[KoNestable](KoNestable.md).[_tweenTimeout](KoNestable.md#_tweentimeout)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:39](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L39)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`\<`Layer`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:47](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L47)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`\<`Layer`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:44](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L44)

___

### configDefaults

• `Protected` **configDefaults**: [`KoShapeConfig`](../modules.md#koshapeconfig)

#### Inherited from

[KoNestable](KoNestable.md).[configDefaults](KoNestable.md#configdefaults)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:46](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L46)

___

### draw$

• `Private` **draw$**: `Subject`\<`void`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:27](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L27)

___

### id

• **id**: `string`

#### Inherited from

[KoNestable](KoNestable.md).[id](KoNestable.md#id)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:22](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L22)

___

### koListening

• **koListening**: `KoListeningDirective`

#### Inherited from

[KoNestable](KoNestable.md).[koListening](KoNestable.md#kolistening)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:50](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L50)

___

### layer

• **layer**: `Layer`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:24](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L24)

___

### layerComponent

• `Private` `Optional` **layerComponent**: [`KoLayerComponent`](KoLayerComponent.md)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:53](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L53)

___

### onNewItem

• **onNewItem**: `EventEmitter`\<`Layer` \| `Group` \| [`KoShape`](../modules.md#koshape)\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:41](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L41)

___

### stageComponent

• **stageComponent**: [`KoStageComponent`](KoStageComponent.md)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:25](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L25)

___

### sub

• `Protected` **sub**: `Subscription`

#### Inherited from

[KoNestable](KoNestable.md).[sub](KoNestable.md#sub)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:36](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L36)

___

### transitionDelay

• **transitionDelay**: `number` = `0`

#### Inherited from

[KoNestable](KoNestable.md).[transitionDelay](KoNestable.md#transitiondelay)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:28](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L28)

___

### transitionOnFinish

• **transitionOnFinish**: `EventEmitter`\<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Inherited from

[KoNestable](KoNestable.md).[transitionOnFinish](KoNestable.md#transitiononfinish)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:34](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L34)

___

### transitionOnUpdate

• **transitionOnUpdate**: `EventEmitter`\<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Inherited from

[KoNestable](KoNestable.md).[transitionOnUpdate](KoNestable.md#transitiononupdate)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:31](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L31)

___

### transitionWith

• `Optional` **transitionWith**: `Omit`\<`TweenConfig`, ``"onFinish"`` \| ``"onUpdate"`` \| ``"node"``\>

#### Inherited from

[KoNestable](KoNestable.md).[transitionWith](KoNestable.md#transitionwith)

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

#### Inherited from

[KoNestable](KoNestable.md).[Easings](KoNestable.md#easings)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:19](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L19)

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

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:31](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L31)

___

### shouldListen

• `get` **shouldListen**(): `boolean`

#### Returns

`boolean`

#### Inherited from

KoNestable.shouldListen

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:42](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L42)

## Methods

### addChild

▸ **addChild**(`child`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`KoNestableNode`](../modules.md#konestablenode) |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:94](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L94)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:106](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L106)

___

### getKoItem

▸ **getKoItem**(): `Layer`

#### Returns

`Layer`

#### Overrides

[KoNestable](KoNestable.md).[getKoItem](KoNestable.md#getkoitem)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:83](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L83)

___

### ngAfterViewInit

▸ **ngAfterViewInit**(): `void`

#### Returns

`void`

#### Implementation of

AfterViewInit.ngAfterViewInit

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:80](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L80)

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

[projects/ngx-konva/src/lib/common/ko-nestable.ts:64](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L64)

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

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:76](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L76)

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

[projects/ngx-konva/src/lib/common/ko-nestable.ts:76](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L76)

___

### updateLayer

▸ **updateLayer**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-layer.component.ts:87](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L87)
