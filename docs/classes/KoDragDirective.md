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
| `nestable` | `KoNestable` |

#### Defined in

lib/directives/ko-drag.directive.ts:24

## Properties

### koDragEnd

• **koDragEnd**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

lib/directives/ko-drag.directive.ts:16

___

### koDragMove

• **koDragMove**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

lib/directives/ko-drag.directive.ts:13

___

### koDragStart

• **koDragStart**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

lib/directives/ko-drag.directive.ts:10

___

### node

• `Private` **node**: `KoNestableNode`

#### Defined in

lib/directives/ko-drag.directive.ts:18

___

### onDragEndListener

• **onDragEndListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

lib/directives/ko-drag.directive.ts:21

___

### onDragMoveListener

• **onDragMoveListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

lib/directives/ko-drag.directive.ts:22

___

### onDragStarterListener

• **onDragStarterListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

lib/directives/ko-drag.directive.ts:20

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-drag.directive.ts:45

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

lib/directives/ko-drag.directive.ts:38

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

lib/directives/ko-drag.directive.ts:35

___

### onDragEnd

▸ **onDragEnd**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-drag.directive.ts:55

___

### onDragMove

▸ **onDragMove**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-drag.directive.ts:59

___

### onDragStart

▸ **onDragStart**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-drag.directive.ts:51
