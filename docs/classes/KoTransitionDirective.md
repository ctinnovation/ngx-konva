[ngx-konva](../README.md) / [Exports](../modules.md) / KoTransitionDirective

# Class: KoTransitionDirective

## Implements

- `OnInit`
- `OnDestroy`

## Table of contents

### Constructors

- [constructor](KoTransitionDirective.md#constructor)

### Properties

- [\_play$](KoTransitionDirective.md#_play$)
- [\_ready$](KoTransitionDirective.md#_ready$)
- [\_trigger$](KoTransitionDirective.md#_trigger$)
- [\_tween](KoTransitionDirective.md#_tween)
- [layerComponent](KoTransitionDirective.md#layercomponent)
- [node](KoTransitionDirective.md#node)
- [sub](KoTransitionDirective.md#sub)

### Accessors

- [koTransition](KoTransitionDirective.md#kotransition)

### Methods

- [ngOnDestroy](KoTransitionDirective.md#ngondestroy)
- [ngOnInit](KoTransitionDirective.md#ngoninit)
- [play](KoTransitionDirective.md#play)

## Constructors

### constructor

• **new KoTransitionDirective**(`nestable`, `layerComponent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nestable` | `KoNestable` |
| `layerComponent` | [`KoLayerComponent`](KoLayerComponent.md) |

#### Defined in

[lib/directives/ko-transition.directive.ts:41](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L41)

## Properties

### \_play$

• `Private` **\_play$**: `Observable`<`any`\>

#### Defined in

[lib/directives/ko-transition.directive.ts:16](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L16)

___

### \_ready$

• `Private` **\_ready$**: `BehaviorSubject`<`boolean`\>

#### Defined in

[lib/directives/ko-transition.directive.ts:14](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L14)

___

### \_trigger$

• `Private` **\_trigger$**: `BehaviorSubject`<`Omit`<`TweenConfig`, ``"node"``\>\>

#### Defined in

[lib/directives/ko-transition.directive.ts:13](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L13)

___

### \_tween

• `Private` **\_tween**: ``null`` \| `Tween` = `null`

#### Defined in

[lib/directives/ko-transition.directive.ts:26](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L26)

___

### layerComponent

• `Private` **layerComponent**: [`KoLayerComponent`](KoLayerComponent.md)

#### Defined in

[lib/directives/ko-transition.directive.ts:43](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L43)

___

### node

• `Private` **node**: `KoNestableNode`

#### Defined in

[lib/directives/ko-transition.directive.ts:39](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L39)

___

### sub

• **sub**: `Subscription`

#### Defined in

[lib/directives/ko-transition.directive.ts:37](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L37)

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

[lib/directives/ko-transition.directive.ts:29](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L29)

## Methods

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[lib/directives/ko-transition.directive.ts:70](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L70)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[lib/directives/ko-transition.directive.ts:67](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L67)

___

### play

▸ `Private` **play**(): `void`

#### Returns

`void`

#### Defined in

[lib/directives/ko-transition.directive.ts:78](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/directives/ko-transition.directive.ts#L78)
