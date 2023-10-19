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
- [children](KoGroupComponent.md#children)
- [group](KoGroupComponent.md#group)
- [id](KoGroupComponent.md#id)
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

- [getKoItem](KoGroupComponent.md#getkoitem)
- [ngAfterViewInit](KoGroupComponent.md#ngafterviewinit)
- [ngOnDestroy](KoGroupComponent.md#ngondestroy)
- [ngOnInit](KoGroupComponent.md#ngoninit)
- [setConfig](KoGroupComponent.md#setconfig)
- [updateChildren](KoGroupComponent.md#updatechildren)
- [updateGroup](KoGroupComponent.md#updategroup)

## Constructors

### constructor

• **new KoGroupComponent**()

#### Overrides

[KoNestable](KoNestable.md).[constructor](KoNestable.md#constructor)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:39](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-group.component.ts#L39)

## Properties

### \_config

• `Private` **\_config**: [`KoNestableConfig`](../modules.md#konestableconfig) = `{}`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:22](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-group.component.ts#L22)

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

• **afterUpdate**: `EventEmitter`<`Group`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:37](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-group.component.ts#L37)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<`Group`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:34](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-group.component.ts#L34)

___

### children

• `Private` **children**: `QueryList`<[`KoNestable`](KoNestable.md)\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:18](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-group.component.ts#L18)

___

### group

• **group**: `Group`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:20](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-group.component.ts#L20)

___

### id

• **id**: `string`

#### Inherited from

[KoNestable](KoNestable.md).[id](KoNestable.md#id)

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:17](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/common/ko-nestable.ts#L17)

___

### onNewItem

• **onNewItem**: `EventEmitter`<`Layer` \| `Group` \| [`KoShape`](../modules.md#koshape)\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:31](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-group.component.ts#L31)

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

[projects/ngx-konva/src/lib/components/ko-group.component.ts:24](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-group.component.ts#L24)

## Methods

### getKoItem

▸ **getKoItem**(): `Group`

#### Returns

`Group`

#### Overrides

[KoNestable](KoNestable.md).[getKoItem](KoNestable.md#getkoitem)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:58](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-group.component.ts#L58)

___

### ngAfterViewInit

▸ **ngAfterViewInit**(): `void`

#### Returns

`void`

#### Implementation of

AfterViewInit.ngAfterViewInit

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:48](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-group.component.ts#L48)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

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

[projects/ngx-konva/src/lib/components/ko-group.component.ts:44](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-group.component.ts#L44)

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

[projects/ngx-konva/src/lib/components/ko-group.component.ts:68](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-group.component.ts#L68)

___

### updateGroup

▸ `Private` **updateGroup**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-group.component.ts:62](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-group.component.ts#L62)
