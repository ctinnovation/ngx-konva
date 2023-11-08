[ngx-konva](../README.md) / [Exports](../modules.md) / KoDragDirective

# Class: KoDragDirective

## Implements

- `OnInit`
- `OnDestroy`

## Table of contents

### Constructors

- [constructor](KoDragDirective.md#constructor)

### Properties

- [koDragEnd](KoDragDirective.md#kodragend)
- [koDragMove](KoDragDirective.md#kodragmove)
- [koDragStart](KoDragDirective.md#kodragstart)
- [node](KoDragDirective.md#node)
- [onDragEndListener](KoDragDirective.md#ondragendlistener)
- [onDragMoveListener](KoDragDirective.md#ondragmovelistener)
- [onDragStarterListener](KoDragDirective.md#ondragstarterlistener)

### Methods

- [addListeners](KoDragDirective.md#addlisteners)
- [ngOnDestroy](KoDragDirective.md#ngondestroy)
- [ngOnInit](KoDragDirective.md#ngoninit)
- [onDragEnd](KoDragDirective.md#ondragend)
- [onDragMove](KoDragDirective.md#ondragmove)
- [onDragStart](KoDragDirective.md#ondragstart)

## Constructors

### constructor

• **new KoDragDirective**(`nestable`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nestable` | [`KoNestable`](KoNestable.md) |

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:24](https://github.com/giovanni-bertoncelli/ngx-konva/blob/a56f97a/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L24)

## Properties

### koDragEnd

• **koDragEnd**: `EventEmitter`<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:16](https://github.com/giovanni-bertoncelli/ngx-konva/blob/a56f97a/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L16)

___

### koDragMove

• **koDragMove**: `EventEmitter`<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:13](https://github.com/giovanni-bertoncelli/ngx-konva/blob/a56f97a/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L13)

___

### koDragStart

• **koDragStart**: `EventEmitter`<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:10](https://github.com/giovanni-bertoncelli/ngx-konva/blob/a56f97a/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L10)

___

### node

• `Private` **node**: [`KoNestableNode`](../modules.md#konestablenode)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:18](https://github.com/giovanni-bertoncelli/ngx-konva/blob/a56f97a/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L18)

___

### onDragEndListener

• **onDragEndListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:21](https://github.com/giovanni-bertoncelli/ngx-konva/blob/a56f97a/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L21)

___

### onDragMoveListener

• **onDragMoveListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:22](https://github.com/giovanni-bertoncelli/ngx-konva/blob/a56f97a/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L22)

___

### onDragStarterListener

• **onDragStarterListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:20](https://github.com/giovanni-bertoncelli/ngx-konva/blob/a56f97a/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L20)

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:45](https://github.com/giovanni-bertoncelli/ngx-konva/blob/a56f97a/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L45)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:38](https://github.com/giovanni-bertoncelli/ngx-konva/blob/a56f97a/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L38)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:35](https://github.com/giovanni-bertoncelli/ngx-konva/blob/a56f97a/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L35)

___

### onDragEnd

▸ **onDragEnd**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:55](https://github.com/giovanni-bertoncelli/ngx-konva/blob/a56f97a/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L55)

___

### onDragMove

▸ **onDragMove**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:59](https://github.com/giovanni-bertoncelli/ngx-konva/blob/a56f97a/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L59)

___

### onDragStart

▸ **onDragStart**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:51](https://github.com/giovanni-bertoncelli/ngx-konva/blob/a56f97a/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L51)
