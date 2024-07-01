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
- [configDefaults](KoGroupComponent.md#configdefaults)
- [group](KoGroupComponent.md#group)
- [id](KoGroupComponent.md#id)
- [koListening](KoGroupComponent.md#kolistening)
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
- [shouldListen](KoGroupComponent.md#shouldlisten)

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

• **new KoGroupComponent**(`koListening`, `layerComponent`): [`KoGroupComponent`](KoGroupComponent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `koListening` | `KoListeningDirective` |
| `layerComponent` | [`KoLayerComponent`](KoLayerComponent.md) |

#### Returns

[`KoGroupComponent`](KoGroupComponent.md)

#### Overrides

[KoNestable](KoNestable.md).[constructor](KoNestable.md#constructor)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:39](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-group.component.ts#L39)

## Properties

### \_config

• `Private` **\_config**: [`KoNestableConfig`](../modules.md#konestableconfig)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:23](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-group.component.ts#L23)

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

• **afterUpdate**: `EventEmitter`\<`Group`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:37](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-group.component.ts#L37)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`\<`Group`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:34](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-group.component.ts#L34)

___

### configDefaults

• `Protected` **configDefaults**: [`KoShapeConfig`](../modules.md#koshapeconfig)

#### Inherited from

[KoNestable](KoNestable.md).[configDefaults](KoNestable.md#configdefaults)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:46](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/common/ko-nestable.ts#L46)

___

### group

• **group**: `Group`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:21](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-group.component.ts#L21)

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

[projects/ngx-konva/src/lib/components/ko-group.component.ts:40](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-group.component.ts#L40)

___

### layerComponent

• `Private` **layerComponent**: [`KoLayerComponent`](KoLayerComponent.md)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:41](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-group.component.ts#L41)

___

### onNewItem

• **onNewItem**: `EventEmitter`\<`Layer` \| `Group` \| [`KoShape`](../modules.md#koshape)\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:31](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-group.component.ts#L31)

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

[projects/ngx-konva/src/lib/components/ko-group.component.ts:25](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-group.component.ts#L25)

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

[projects/ngx-konva/src/lib/components/ko-group.component.ts:65](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-group.component.ts#L65)

___

### getKoItem

▸ **getKoItem**(): `Group`

#### Returns

`Group`

#### Overrides

[KoNestable](KoNestable.md).[getKoItem](KoNestable.md#getkoitem)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:55](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-group.component.ts#L55)

___

### ngAfterViewInit

▸ **ngAfterViewInit**(): `void`

#### Returns

`void`

#### Implementation of

AfterViewInit.ngAfterViewInit

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:52](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-group.component.ts#L52)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

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

[projects/ngx-konva/src/lib/components/ko-group.component.ts:48](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-group.component.ts#L48)

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

### updateGroup

▸ **updateGroup**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:59](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-group.component.ts#L59)
