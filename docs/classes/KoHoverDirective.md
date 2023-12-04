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
- [node](KoHoverDirective.md#node)
- [onMouseEnterListener](KoHoverDirective.md#onmouseenterlistener)
- [onMouseOutListener](KoHoverDirective.md#onmouseoutlistener)

### Methods

- [addListeners](KoHoverDirective.md#addlisteners)
- [ngOnDestroy](KoHoverDirective.md#ngondestroy)
- [ngOnInit](KoHoverDirective.md#ngoninit)
- [onMouseEnter](KoHoverDirective.md#onmouseenter)
- [onMouseOut](KoHoverDirective.md#onmouseout)

## Constructors

### constructor

• **new KoHoverDirective**(`nestable`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nestable` | [`KoNestable`](KoNestable.md) |

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:23](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L23)

## Properties

### hovering

• **hovering**: `boolean` = `false`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:16](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L16)

___

### koHoverEnd

• **koHoverEnd**: `EventEmitter`<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:14](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L14)

___

### koHoverStart

• **koHoverStart**: `EventEmitter`<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:11](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L11)

___

### node

• `Private` **node**: [`KoNestableNode`](../modules.md#konestablenode)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:18](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L18)

___

### onMouseEnterListener

• **onMouseEnterListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:20](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L20)

___

### onMouseOutListener

• **onMouseOutListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:21](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L21)

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:43](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L43)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:37](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L37)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:34](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L34)

___

### onMouseEnter

▸ **onMouseEnter**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:48](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L48)

___

### onMouseOut

▸ **onMouseOut**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:53](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L53)
