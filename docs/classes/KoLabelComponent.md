[ngx-konva](../README.md) / [Exports](../modules.md) / KoLabelComponent

# Class: KoLabelComponent

## Hierarchy

- [`KoNestable`](KoNestable.md)

  ↳ **`KoLabelComponent`**

## Implements

- `OnInit`

## Table of contents

### Constructors

- [constructor](KoLabelComponent.md#constructor)

### Properties

- [\_config](KoLabelComponent.md#_config)
- [\_tagConfig](KoLabelComponent.md#_tagconfig)
- [\_textConfig](KoLabelComponent.md#_textconfig)
- [\_tween](KoLabelComponent.md#_tween)
- [\_tweenTimeout](KoLabelComponent.md#_tweentimeout)
- [afterUpdate](KoLabelComponent.md#afterupdate)
- [beforeUpdate](KoLabelComponent.md#beforeupdate)
- [centerOrigin](KoLabelComponent.md#centerorigin)
- [groupComponent](KoLabelComponent.md#groupcomponent)
- [id](KoLabelComponent.md#id)
- [layerComponent](KoLabelComponent.md#layercomponent)
- [node](KoLabelComponent.md#node)
- [sub](KoLabelComponent.md#sub)
- [tag](KoLabelComponent.md#tag)
- [text](KoLabelComponent.md#text)
- [transitionDelay](KoLabelComponent.md#transitiondelay)
- [transitionOnFinish](KoLabelComponent.md#transitiononfinish)
- [transitionOnUpdate](KoLabelComponent.md#transitiononupdate)
- [transitionWith](KoLabelComponent.md#transitionwith)
- [Easings](KoLabelComponent.md#easings)

### Accessors

- [config](KoLabelComponent.md#config)
- [tagConfig](KoLabelComponent.md#tagconfig)
- [tagDisabled](KoLabelComponent.md#tagdisabled)
- [textConfig](KoLabelComponent.md#textconfig)
- [textDisabled](KoLabelComponent.md#textdisabled)

### Methods

- [\_afterRender](KoLabelComponent.md#_afterrender)
- [\_beforeRender](KoLabelComponent.md#_beforerender)
- [getKoItem](KoLabelComponent.md#getkoitem)
- [ngOnDestroy](KoLabelComponent.md#ngondestroy)
- [ngOnInit](KoLabelComponent.md#ngoninit)
- [setConfig](KoLabelComponent.md#setconfig)
- [updateLabel](KoLabelComponent.md#updatelabel)
- [updateTag](KoLabelComponent.md#updatetag)
- [updateText](KoLabelComponent.md#updatetext)

## Constructors

### constructor

• **new KoLabelComponent**(`layerComponent`, `groupComponent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerComponent` | [`KoLayerComponent`](KoLayerComponent.md) |
| `groupComponent` | [`KoGroupComponent`](KoGroupComponent.md) |

#### Overrides

[KoNestable](KoNestable.md).[constructor](KoNestable.md#constructor)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:71](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L71)

## Properties

### \_config

• `Private` **\_config**: [`KoNestableConfig`](../modules.md#konestableconfig) = `{}`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:22](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L22)

___

### \_tagConfig

• `Private` **\_tagConfig**: `TagConfig` = `{}`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:37](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L37)

___

### \_textConfig

• `Private` **\_textConfig**: `TextConfig` = `{}`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:30](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L30)

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

• **afterUpdate**: `EventEmitter`<`Label`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:69](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L69)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<`Label`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:66](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L66)

___

### centerOrigin

• **centerOrigin**: `boolean` = `false`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:63](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L63)

___

### groupComponent

• `Private` **groupComponent**: [`KoGroupComponent`](KoGroupComponent.md)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:73](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L73)

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

[projects/ngx-konva/src/lib/components/ko-label.component.ts:72](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L72)

___

### node

• **node**: `Label`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:18](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L18)

___

### sub

• `Protected` **sub**: `Subscription`

#### Inherited from

[KoNestable](KoNestable.md).[sub](KoNestable.md#sub)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:32](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L32)

___

### tag

• `Optional` **tag**: `Tag`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:20](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L20)

___

### text

• `Optional` **text**: `Text`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:19](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L19)

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

[projects/ngx-konva/src/lib/components/ko-label.component.ts:24](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L24)

___

### tagConfig

• `set` **tagConfig**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `TagConfig` |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:39](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L39)

___

### tagDisabled

• `set` **tagDisabled**(`d`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `boolean` |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:45](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L45)

___

### textConfig

• `set` **textConfig**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `TextConfig` |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:32](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L32)

___

### textDisabled

• `set` **textDisabled**(`d`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `boolean` |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:54](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L54)

## Methods

### \_afterRender

▸ `Private` **_afterRender**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:124](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L124)

___

### \_beforeRender

▸ `Private` **_beforeRender**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:120](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L120)

___

### getKoItem

▸ **getKoItem**(): `Label`

#### Returns

`Label`

#### Overrides

[KoNestable](KoNestable.md).[getKoItem](KoNestable.md#getkoitem)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:94](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L94)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Overrides

[KoNestable](KoNestable.md).[ngOnDestroy](KoNestable.md#ngondestroy)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:90](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L90)

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

#### Inherited from

[KoNestable](KoNestable.md).[setConfig](KoNestable.md#setconfig)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:49](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L49)

___

### updateLabel

▸ `Private` **updateLabel**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:106](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L106)

___

### updateTag

▸ `Private` **updateTag**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:112](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L112)

___

### updateText

▸ `Private` **updateText**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:98](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-label.component.ts#L98)
