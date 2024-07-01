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

• **new KoHoverDirective**(`nestable`): [`KoHoverDirective`](KoHoverDirective.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nestable` | [`KoNestable`](KoNestable.md) |

#### Returns

[`KoHoverDirective`](KoHoverDirective.md)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:28](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L28)

## Properties

### hovering

• **hovering**: `boolean` = `false`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:21](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L21)

___

### koHoverEnd

• **koHoverEnd**: `EventEmitter`\<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:19](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L19)

___

### koHoverStart

• **koHoverStart**: `EventEmitter`\<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:16](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L16)

___

### node

• `Private` **node**: [`KoNestableNode`](../modules.md#konestablenode)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:23](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L23)

___

### onMouseEnterListener

• **onMouseEnterListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:25](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L25)

___

### onMouseOutListener

• **onMouseOutListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:26](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L26)

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:48](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L48)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:42](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L42)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:39](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L39)

___

### onMouseEnter

▸ **onMouseEnter**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:53](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L53)

___

### onMouseOut

▸ **onMouseOut**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-hover.directive.ts:58](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L58)
