[ngx-konva](../README.md) / [Exports](../modules.md) / KoPointerDirective

# Class: KoPointerDirective

## Implements

- `OnInit`
- `OnDestroy`

## Table of contents

### Constructors

- [constructor](KoPointerDirective.md#constructor)

### Properties

- [hovering](KoPointerDirective.md#hovering)
- [koPointerCancel](KoPointerDirective.md#kopointercancel)
- [koPointerClick](KoPointerDirective.md#kopointerclick)
- [koPointerDblClick](KoPointerDirective.md#kopointerdblclick)
- [koPointerDown](KoPointerDirective.md#kopointerdown)
- [koPointerEnter](KoPointerDirective.md#kopointerenter)
- [koPointerLeave](KoPointerDirective.md#kopointerleave)
- [koPointerMove](KoPointerDirective.md#kopointermove)
- [koPointerOut](KoPointerDirective.md#kopointerout)
- [koPointerOver](KoPointerDirective.md#kopointerover)
- [koPointerUp](KoPointerDirective.md#kopointerup)
- [node](KoPointerDirective.md#node)
- [onPointerCancelListener](KoPointerDirective.md#onpointercancellistener)
- [onPointerClickListener](KoPointerDirective.md#onpointerclicklistener)
- [onPointerDblClickListener](KoPointerDirective.md#onpointerdblclicklistener)
- [onPointerDownListener](KoPointerDirective.md#onpointerdownlistener)
- [onPointerEnterListener](KoPointerDirective.md#onpointerenterlistener)
- [onPointerLeaveListener](KoPointerDirective.md#onpointerleavelistener)
- [onPointerMoveListener](KoPointerDirective.md#onpointermovelistener)
- [onPointerOutListener](KoPointerDirective.md#onpointeroutlistener)
- [onPointerOverListener](KoPointerDirective.md#onpointeroverlistener)
- [onPointerUpListener](KoPointerDirective.md#onpointeruplistener)
- [sub](KoPointerDirective.md#sub)

### Methods

- [addListeners](KoPointerDirective.md#addlisteners)
- [ngOnDestroy](KoPointerDirective.md#ngondestroy)
- [ngOnInit](KoPointerDirective.md#ngoninit)
- [onPointerCancel](KoPointerDirective.md#onpointercancel)
- [onPointerClick](KoPointerDirective.md#onpointerclick)
- [onPointerDblClick](KoPointerDirective.md#onpointerdblclick)
- [onPointerDown](KoPointerDirective.md#onpointerdown)
- [onPointerEnter](KoPointerDirective.md#onpointerenter)
- [onPointerLeave](KoPointerDirective.md#onpointerleave)
- [onPointerMove](KoPointerDirective.md#onpointermove)
- [onPointerOut](KoPointerDirective.md#onpointerout)
- [onPointerOver](KoPointerDirective.md#onpointerover)
- [onPointerUp](KoPointerDirective.md#onpointerup)

## Constructors

### constructor

• **new KoPointerDirective**(`nestable`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nestable` | `KoNestable` |

#### Defined in

lib/directives/ko-pointer.directive.ts:56

## Properties

### hovering

• **hovering**: `boolean` = `false`

#### Defined in

lib/directives/ko-pointer.directive.ts:40

___

### koPointerCancel

• **koPointerCancel**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

lib/directives/ko-pointer.directive.ts:19

___

### koPointerClick

• **koPointerClick**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

lib/directives/ko-pointer.directive.ts:34

___

### koPointerDblClick

• **koPointerDblClick**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

lib/directives/ko-pointer.directive.ts:37

___

### koPointerDown

• **koPointerDown**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

lib/directives/ko-pointer.directive.ts:10

___

### koPointerEnter

• **koPointerEnter**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

lib/directives/ko-pointer.directive.ts:25

___

### koPointerLeave

• **koPointerLeave**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

lib/directives/ko-pointer.directive.ts:31

___

### koPointerMove

• **koPointerMove**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

lib/directives/ko-pointer.directive.ts:13

___

### koPointerOut

• **koPointerOut**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

lib/directives/ko-pointer.directive.ts:28

___

### koPointerOver

• **koPointerOver**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

lib/directives/ko-pointer.directive.ts:22

___

### koPointerUp

• **koPointerUp**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

lib/directives/ko-pointer.directive.ts:16

___

### node

• `Private` **node**: `KoNestableNode`

#### Defined in

lib/directives/ko-pointer.directive.ts:42

___

### onPointerCancelListener

• **onPointerCancelListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:47

___

### onPointerClickListener

• **onPointerClickListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:52

___

### onPointerDblClickListener

• **onPointerDblClickListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:53

___

### onPointerDownListener

• **onPointerDownListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:44

___

### onPointerEnterListener

• **onPointerEnterListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:49

___

### onPointerLeaveListener

• **onPointerLeaveListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:51

___

### onPointerMoveListener

• **onPointerMoveListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:45

___

### onPointerOutListener

• **onPointerOutListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:50

___

### onPointerOverListener

• **onPointerOverListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:48

___

### onPointerUpListener

• **onPointerUpListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:46

___

### sub

• **sub**: `Subscription`

#### Defined in

lib/directives/ko-pointer.directive.ts:39

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:88

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

lib/directives/ko-pointer.directive.ts:70

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

lib/directives/ko-pointer.directive.ts:67

___

### onPointerCancel

▸ **onPointerCancel**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:117

___

### onPointerClick

▸ **onPointerClick**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:137

___

### onPointerDblClick

▸ **onPointerDblClick**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:141

___

### onPointerDown

▸ **onPointerDown**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:105

___

### onPointerEnter

▸ **onPointerEnter**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:125

___

### onPointerLeave

▸ **onPointerLeave**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:133

___

### onPointerMove

▸ **onPointerMove**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:109

___

### onPointerOut

▸ **onPointerOut**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:129

___

### onPointerOver

▸ **onPointerOver**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:121

___

### onPointerUp

▸ **onPointerUp**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-pointer.directive.ts:113
