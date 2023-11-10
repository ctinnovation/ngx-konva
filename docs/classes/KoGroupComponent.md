[ngx-konva](../README.md) / [Exports](../modules.md) / KoGroupComponent

# Class: KoGroupComponent

## Hierarchy

- [`KoNestable`](KoNestable.md)

  ↳ **`KoGroupComponent`**

## Implements

- `OnInit`
- `AfterViewInit`

## Table of contents

### Constructors

- [constructor](KoGroupComponent.md#constructor)

### Properties

- [\_config](KoGroupComponent.md#_config)
- [\_tween](KoGroupComponent.md#_tween)
- [\_tweenTimeout](KoGroupComponent.md#_tweentimeout)
- [afterUpdate](KoGroupComponent.md#afterupdate)
- [beforeUpdate](KoGroupComponent.md#beforeupdate)
- [group](KoGroupComponent.md#group)
- [id](KoGroupComponent.md#id)
- [layerComponent](KoGroupComponent.md#layercomponent)
- [onNewItem](KoGroupComponent.md#onnewitem)
- [sub](KoGroupComponent.md#sub)
- [transitionDelay](KoGroupComponent.md#transitiondelay)
- [transitionOnFinish](KoGroupComponent.md#transitiononfinish)
- [transitionOnUpdate](KoGroupComponent.md#transitiononupdate)
- [transitionWith](KoGroupComponent.md#transitionwith)
- [Easings](KoGroupComponent.md#easings)

### Accessors

- [config](KoGroupComponent.md#config)

### Methods

- [addChild](KoGroupComponent.md#addchild)
- [getKoItem](KoGroupComponent.md#getkoitem)
- [ngAfterViewInit](KoGroupComponent.md#ngafterviewinit)
- [ngOnDestroy](KoGroupComponent.md#ngondestroy)
- [ngOnInit](KoGroupComponent.md#ngoninit)
- [setConfig](KoGroupComponent.md#setconfig)
- [updateGroup](KoGroupComponent.md#updategroup)

## Constructors

### constructor

• **new KoGroupComponent**(`layerComponent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerComponent` | [`KoLayerComponent`](KoLayerComponent.md) |

#### Overrides

[KoNestable](KoNestable.md).[constructor](KoNestable.md#constructor)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:37](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-group.component.ts#L37)

## Properties

### \_config

• `Private` **\_config**: [`KoNestableConfig`](../modules.md#konestableconfig) = `{}`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:20](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-group.component.ts#L20)

___

### \_tween

• `Protected` `Optional` **\_tween**: `Tween`

#### Inherited from

[KoNestable](KoNestable.md).[_tween](KoNestable.md#_tween)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:34](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L34)

___

### \_tweenTimeout

• `Protected` `Optional` **\_tweenTimeout**: `any`

#### Inherited from

[KoNestable](KoNestable.md).[_tweenTimeout](KoNestable.md#_tweentimeout)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:35](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L35)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`<`Group`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:35](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-group.component.ts#L35)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<`Group`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:32](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-group.component.ts#L32)

___

### group

• **group**: `Group`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:18](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-group.component.ts#L18)

___

### id

• **id**: `string`

#### Inherited from

[KoNestable](KoNestable.md).[id](KoNestable.md#id)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:18](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L18)

___

### layerComponent

• `Private` **layerComponent**: [`KoLayerComponent`](KoLayerComponent.md)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:38](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-group.component.ts#L38)

___

### onNewItem

• **onNewItem**: `EventEmitter`<`Layer` \| `Group` \| [`KoShape`](../modules.md#koshape)\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:29](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-group.component.ts#L29)

___

### sub

• `Protected` **sub**: `Subscription`

#### Inherited from

[KoNestable](KoNestable.md).[sub](KoNestable.md#sub)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:32](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L32)

___

### transitionDelay

• **transitionDelay**: `number` = `0`

#### Inherited from

[KoNestable](KoNestable.md).[transitionDelay](KoNestable.md#transitiondelay)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:24](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L24)

___

### transitionOnFinish

• **transitionOnFinish**: `EventEmitter`<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Inherited from

[KoNestable](KoNestable.md).[transitionOnFinish](KoNestable.md#transitiononfinish)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:30](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L30)

___

### transitionOnUpdate

• **transitionOnUpdate**: `EventEmitter`<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Inherited from

[KoNestable](KoNestable.md).[transitionOnUpdate](KoNestable.md#transitiononupdate)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:27](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L27)

___

### transitionWith

• `Optional` **transitionWith**: `Omit`<`TweenConfig`, ``"onFinish"`` \| ``"onUpdate"`` \| ``"node"``\>

#### Inherited from

[KoNestable](KoNestable.md).[transitionWith](KoNestable.md#transitionwith)

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

#### Inherited from

[KoNestable](KoNestable.md).[Easings](KoNestable.md#easings)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:15](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L15)

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

[projects/ngx-konva/src/lib/components/ko-group.component.ts:22](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-group.component.ts#L22)

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

[projects/ngx-konva/src/lib/components/ko-group.component.ts:62](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-group.component.ts#L62)

___

### getKoItem

▸ **getKoItem**(): `Group`

#### Returns

`Group`

#### Overrides

[KoNestable](KoNestable.md).[getKoItem](KoNestable.md#getkoitem)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:52](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-group.component.ts#L52)

___

### ngAfterViewInit

▸ **ngAfterViewInit**(): `void`

#### Returns

`void`

#### Implementation of

AfterViewInit.ngAfterViewInit

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:49](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-group.component.ts#L49)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Inherited from

[KoNestable](KoNestable.md).[ngOnDestroy](KoNestable.md#ngondestroy)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:44](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L44)

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

[projects/ngx-konva/src/lib/components/ko-group.component.ts:45](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-group.component.ts#L45)

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

[projects/ngx-konva/src/lib/common/ko-nestable.ts:49](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L49)

___

### updateGroup

▸ `Private` **updateGroup**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:56](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-group.component.ts#L56)
