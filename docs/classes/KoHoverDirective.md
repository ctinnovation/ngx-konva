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
- [sub](KoHoverDirective.md#sub)

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
| `nestable` | `KoNestable` |

#### Defined in

[lib/directives/ko-hover.directive.ts:25](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L25)

## Properties

### hovering

• **hovering**: `boolean` = `false`

#### Defined in

[lib/directives/ko-hover.directive.ts:18](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L18)

___

### koHoverEnd

• **koHoverEnd**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

[lib/directives/ko-hover.directive.ts:15](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L15)

___

### koHoverStart

• **koHoverStart**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

[lib/directives/ko-hover.directive.ts:12](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L12)

___

### node

• `Private` **node**: `KoNestableNode`

#### Defined in

[lib/directives/ko-hover.directive.ts:20](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L20)

___

### onMouseEnterListener

• **onMouseEnterListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[lib/directives/ko-hover.directive.ts:22](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L22)

___

### onMouseOutListener

• **onMouseOutListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[lib/directives/ko-hover.directive.ts:23](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L23)

___

### sub

• **sub**: `Subscription`

#### Defined in

[lib/directives/ko-hover.directive.ts:17](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L17)

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

[lib/directives/ko-hover.directive.ts:49](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L49)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[lib/directives/ko-hover.directive.ts:39](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L39)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[lib/directives/ko-hover.directive.ts:36](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L36)

___

### onMouseEnter

▸ **onMouseEnter**(): `void`

#### Returns

`void`

#### Defined in

[lib/directives/ko-hover.directive.ts:58](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L58)

___

### onMouseOut

▸ **onMouseOut**(): `void`

#### Returns

`void`

#### Defined in

[lib/directives/ko-hover.directive.ts:64](https://github.com/giovanni-bertoncelli/ngx-konva/blob/bb48827/projects/ngx-konva/src/lib/directives/ko-hover.directive.ts#L64)
