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
- [id](KoLabelComponent.md#id)
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

• **new KoLabelComponent**()

#### Overrides

[KoNestable](KoNestable.md).[constructor](KoNestable.md#constructor)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:69](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L69)

## Properties

### \_config

• `Private` **\_config**: [`KoNestableConfig`](../modules.md#konestableconfig) = `{}`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:20](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L20)

___

### \_tagConfig

• `Private` **\_tagConfig**: `TagConfig` = `{}`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:35](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L35)

___

### \_textConfig

• `Private` **\_textConfig**: `TextConfig` = `{}`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:28](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L28)

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

• **afterUpdate**: `EventEmitter`<`Label`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:67](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L67)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<`Label`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:64](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L64)

___

### centerOrigin

• **centerOrigin**: `boolean` = `false`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:61](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L61)

___

### id

• **id**: `string`

#### Inherited from

[KoNestable](KoNestable.md).[id](KoNestable.md#id)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:17](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/common/ko-nestable.ts#L17)

___

### node

• **node**: `Label`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:16](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L16)

___

### sub

• `Protected` **sub**: `Subscription`

#### Inherited from

[KoNestable](KoNestable.md).[sub](KoNestable.md#sub)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:31](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/common/ko-nestable.ts#L31)

___

### tag

• `Optional` **tag**: `Tag`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:18](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L18)

___

### text

• `Optional` **text**: `Text`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:17](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L17)

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

[projects/ngx-konva/src/lib/components/ko-label.component.ts:22](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L22)

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

[projects/ngx-konva/src/lib/components/ko-label.component.ts:37](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L37)

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

[projects/ngx-konva/src/lib/components/ko-label.component.ts:43](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L43)

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

[projects/ngx-konva/src/lib/components/ko-label.component.ts:30](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L30)

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

[projects/ngx-konva/src/lib/components/ko-label.component.ts:52](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L52)

## Methods

### \_afterRender

▸ `Private` **_afterRender**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:115](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L115)

___

### \_beforeRender

▸ `Private` **_beforeRender**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:111](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L111)

___

### getKoItem

▸ **getKoItem**(): `Label`

#### Returns

`Label`

#### Overrides

[KoNestable](KoNestable.md).[getKoItem](KoNestable.md#getkoitem)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:85](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L85)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Overrides

[KoNestable](KoNestable.md).[ngOnDestroy](KoNestable.md#ngondestroy)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:81](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L81)

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

[projects/ngx-konva/src/lib/common/ko-nestable.ts:41](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/common/ko-nestable.ts#L41)

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

### updateLabel

▸ `Private` **updateLabel**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:97](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L97)

___

### updateTag

▸ `Private` **updateTag**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:103](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L103)

___

### updateText

▸ `Private` **updateText**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-label.component.ts:89](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-label.component.ts#L89)
