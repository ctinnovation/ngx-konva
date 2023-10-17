[ngx-konva](../README.md) / [Exports](../modules.md) / KoTransitionDirective

# Class: KoTransitionDirective

## Implements

- `OnInit`
- `OnDestroy`

## Table of contents

### Constructors

- [constructor](KoTransitionDirective.md#constructor)

### Properties

- [\_currentTransition](KoTransitionDirective.md#_currenttransition)
- [\_tween](KoTransitionDirective.md#_tween)
- [layer](KoTransitionDirective.md#layer)
- [node](KoTransitionDirective.md#node)
- [sub](KoTransitionDirective.md#sub)

### Accessors

- [koTransition](KoTransitionDirective.md#kotransition)

### Methods

- [ngOnDestroy](KoTransitionDirective.md#ngondestroy)
- [ngOnInit](KoTransitionDirective.md#ngoninit)
- [onLayerAdd](KoTransitionDirective.md#onlayeradd)
- [tryPlay](KoTransitionDirective.md#tryplay)

## Constructors

### constructor

• **new KoTransitionDirective**(`nestable`, `layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nestable` | `KoNestable` |
| `layer` | [`KoLayerComponent`](KoLayerComponent.md) |

#### Defined in

[lib/directives/ko-transition.directive.ts:34](https://github.com/giovanni-bertoncelli/ngx-konva/blob/1d5bad9/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L34)

## Properties

### \_currentTransition

• **\_currentTransition**: ``null`` \| `Omit`<`TweenConfig`, ``"node"``\> = `null`

#### Defined in

[lib/directives/ko-transition.directive.ts:14](https://github.com/giovanni-bertoncelli/ngx-konva/blob/1d5bad9/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L14)

___

### \_tween

• **\_tween**: ``null`` \| `Tween` = `null`

#### Defined in

[lib/directives/ko-transition.directive.ts:13](https://github.com/giovanni-bertoncelli/ngx-konva/blob/1d5bad9/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L13)

___

### layer

• `Private` **layer**: [`KoLayerComponent`](KoLayerComponent.md)

#### Defined in

[lib/directives/ko-transition.directive.ts:36](https://github.com/giovanni-bertoncelli/ngx-konva/blob/1d5bad9/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L36)

___

### node

• `Private` **node**: `KoNestableNode`

#### Defined in

[lib/directives/ko-transition.directive.ts:32](https://github.com/giovanni-bertoncelli/ngx-konva/blob/1d5bad9/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L32)

___

### sub

• **sub**: `Subscription`

#### Defined in

[lib/directives/ko-transition.directive.ts:30](https://github.com/giovanni-bertoncelli/ngx-konva/blob/1d5bad9/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L30)

## Accessors

### koTransition

• `set` **koTransition**(`t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `Omit`<`TweenConfig`, ``"node"``\> |

#### Returns

`void`

#### Defined in

[lib/directives/ko-transition.directive.ts:17](https://github.com/giovanni-bertoncelli/ngx-konva/blob/1d5bad9/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L17)

## Methods

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[lib/directives/ko-transition.directive.ts:49](https://github.com/giovanni-bertoncelli/ngx-konva/blob/1d5bad9/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L49)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[lib/directives/ko-transition.directive.ts:46](https://github.com/giovanni-bertoncelli/ngx-konva/blob/1d5bad9/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L46)

___

### onLayerAdd

▸ `Private` **onLayerAdd**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `KoNestable` |

#### Returns

`void`

#### Defined in

[lib/directives/ko-transition.directive.ts:57](https://github.com/giovanni-bertoncelli/ngx-konva/blob/1d5bad9/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L57)

___

### tryPlay

▸ `Private` **tryPlay**(): `void`

#### Returns

`void`

#### Defined in

[lib/directives/ko-transition.directive.ts:66](https://github.com/giovanni-bertoncelli/ngx-konva/blob/1d5bad9/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L66)
