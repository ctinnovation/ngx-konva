[ngx-konva](../README.md) / [Exports](../modules.md) / KoHoverDirective

# Class: KoHoverDirective

## Implements

- `OnInit`
- `OnDestroy`

## Table of contents

### Constructors

- [constructor](KoHoverDirective.md#constructor)

### Properties

- [hovering](KoHoverDirective.md#hovering)
- [koHoverEnd](KoHoverDirective.md#kohoverend)
- [koHoverStart](KoHoverDirective.md#kohoverstart)
- [onMouseEnterListener](KoHoverDirective.md#onmouseenterlistener)
- [onMouseOutListener](KoHoverDirective.md#onmouseoutlistener)
- [shape](KoHoverDirective.md#shape)
- [sub](KoHoverDirective.md#sub)

### Methods

- [addListeners](KoHoverDirective.md#addlisteners)
- [ngOnDestroy](KoHoverDirective.md#ngondestroy)
- [ngOnInit](KoHoverDirective.md#ngoninit)
- [onMouseEnter](KoHoverDirective.md#onmouseenter)
- [onMouseOut](KoHoverDirective.md#onmouseout)

## Constructors

### constructor

• **new KoHoverDirective**(`component`, `nestable`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `KoListenable` |
| `nestable` | `KoNestable` |

#### Defined in

[lib/ko-hover.directive.ts:26](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-hover.directive.ts#L26)

## Properties

### hovering

• **hovering**: `boolean` = `false`

#### Defined in

[lib/ko-hover.directive.ts:19](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-hover.directive.ts#L19)

___

### koHoverEnd

• **koHoverEnd**: `EventEmitter`<[`KoShape`](../modules.md#koshape)\>

#### Defined in

[lib/ko-hover.directive.ts:16](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-hover.directive.ts#L16)

___

### koHoverStart

• **koHoverStart**: `EventEmitter`<[`KoShape`](../modules.md#koshape)\>

#### Defined in

[lib/ko-hover.directive.ts:13](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-hover.directive.ts#L13)

___

### onMouseEnterListener

• **onMouseEnterListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[lib/ko-hover.directive.ts:23](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-hover.directive.ts#L23)

___

### onMouseOutListener

• **onMouseOutListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[lib/ko-hover.directive.ts:24](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-hover.directive.ts#L24)

___

### shape

• `Private` **shape**: [`KoShape`](../modules.md#koshape)

#### Defined in

[lib/ko-hover.directive.ts:21](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-hover.directive.ts#L21)

___

### sub

• **sub**: `Subscription`

#### Defined in

[lib/ko-hover.directive.ts:18](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-hover.directive.ts#L18)

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

[lib/ko-hover.directive.ts:51](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-hover.directive.ts#L51)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[lib/ko-hover.directive.ts:41](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-hover.directive.ts#L41)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[lib/ko-hover.directive.ts:38](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-hover.directive.ts#L38)

___

### onMouseEnter

▸ **onMouseEnter**(): `void`

#### Returns

`void`

#### Defined in

[lib/ko-hover.directive.ts:60](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-hover.directive.ts#L60)

___

### onMouseOut

▸ **onMouseOut**(): `void`

#### Returns

`void`

#### Defined in

[lib/ko-hover.directive.ts:66](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-hover.directive.ts#L66)
