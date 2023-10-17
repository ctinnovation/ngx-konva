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

[lib/ko-hover.directive.ts:25](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-hover.directive.ts#L25)

## Properties

### hovering

• **hovering**: `boolean` = `false`

#### Defined in

[lib/ko-hover.directive.ts:18](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-hover.directive.ts#L18)

___

### koHoverEnd

• **koHoverEnd**: `EventEmitter`<`Shape`\>

#### Defined in

[lib/ko-hover.directive.ts:15](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-hover.directive.ts#L15)

___

### koHoverStart

• **koHoverStart**: `EventEmitter`<`Shape`\>

#### Defined in

[lib/ko-hover.directive.ts:12](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-hover.directive.ts#L12)

___

### onMouseEnterListener

• **onMouseEnterListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[lib/ko-hover.directive.ts:22](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-hover.directive.ts#L22)

___

### onMouseOutListener

• **onMouseOutListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[lib/ko-hover.directive.ts:23](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-hover.directive.ts#L23)

___

### shape

• `Private` **shape**: `Shape`

#### Defined in

[lib/ko-hover.directive.ts:20](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-hover.directive.ts#L20)

___

### sub

• **sub**: `Subscription`

#### Defined in

[lib/ko-hover.directive.ts:17](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-hover.directive.ts#L17)

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

[lib/ko-hover.directive.ts:50](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-hover.directive.ts#L50)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[lib/ko-hover.directive.ts:40](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-hover.directive.ts#L40)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[lib/ko-hover.directive.ts:37](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-hover.directive.ts#L37)

___

### onMouseEnter

▸ **onMouseEnter**(): `void`

#### Returns

`void`

#### Defined in

[lib/ko-hover.directive.ts:59](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-hover.directive.ts#L59)

___

### onMouseOut

▸ **onMouseOut**(): `void`

#### Returns

`void`

#### Defined in

[lib/ko-hover.directive.ts:65](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-hover.directive.ts#L65)
