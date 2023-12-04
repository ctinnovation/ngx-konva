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

• **new KoPointerDirective**(`nestable`, `stage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nestable` | [`KoNestable`](KoNestable.md) |
| `stage` | [`KoStageComponent`](KoStageComponent.md) |

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:58](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L58)

## Properties

### hovering

• **hovering**: `boolean` = `false`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:42](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L42)

___

### koPointerCancel

• **koPointerCancel**: `EventEmitter`<`KonvaEventObject`<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:21](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L21)

___

### koPointerClick

• **koPointerClick**: `EventEmitter`<`KonvaEventObject`<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:36](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L36)

___

### koPointerDblClick

• **koPointerDblClick**: `EventEmitter`<`KonvaEventObject`<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:39](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L39)

___

### koPointerDown

• **koPointerDown**: `EventEmitter`<`KonvaEventObject`<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:12](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L12)

___

### koPointerEnter

• **koPointerEnter**: `EventEmitter`<`KonvaEventObject`<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:27](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L27)

___

### koPointerLeave

• **koPointerLeave**: `EventEmitter`<`KonvaEventObject`<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:33](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L33)

___

### koPointerMove

• **koPointerMove**: `EventEmitter`<`KonvaEventObject`<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:15](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L15)

___

### koPointerOut

• **koPointerOut**: `EventEmitter`<`KonvaEventObject`<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:30](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L30)

___

### koPointerOver

• **koPointerOver**: `EventEmitter`<`KonvaEventObject`<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:24](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L24)

___

### koPointerUp

• **koPointerUp**: `EventEmitter`<`KonvaEventObject`<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:18](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L18)

___

### node

• `Private` **node**: [`KoNestableNode`](../modules.md#konestablenode)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:44](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L44)

___

### onPointerCancelListener

• **onPointerCancelListener**: (`event`: `KonvaEventObject`<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:49](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L49)

___

### onPointerClickListener

• **onPointerClickListener**: (`event`: `KonvaEventObject`<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:54](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L54)

___

### onPointerDblClickListener

• **onPointerDblClickListener**: (`event`: `KonvaEventObject`<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:55](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L55)

___

### onPointerDownListener

• **onPointerDownListener**: (`event`: `KonvaEventObject`<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:46](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L46)

___

### onPointerEnterListener

• **onPointerEnterListener**: (`event`: `KonvaEventObject`<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:51](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L51)

___

### onPointerLeaveListener

• **onPointerLeaveListener**: (`event`: `KonvaEventObject`<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:53](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L53)

___

### onPointerMoveListener

• **onPointerMoveListener**: (`event`: `KonvaEventObject`<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:47](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L47)

___

### onPointerOutListener

• **onPointerOutListener**: (`event`: `KonvaEventObject`<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:52](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L52)

___

### onPointerOverListener

• **onPointerOverListener**: (`event`: `KonvaEventObject`<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:50](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L50)

___

### onPointerUpListener

• **onPointerUpListener**: (`event`: `KonvaEventObject`<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:48](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L48)

___

### sub

• **sub**: `Subscription`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:41](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L41)

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:92](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L92)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:74](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L74)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:71](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L71)

___

### onPointerCancel

▸ **onPointerCancel**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:121](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L121)

___

### onPointerClick

▸ **onPointerClick**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:141](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L141)

___

### onPointerDblClick

▸ **onPointerDblClick**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:145](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L145)

___

### onPointerDown

▸ **onPointerDown**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:109](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L109)

___

### onPointerEnter

▸ **onPointerEnter**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:129](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L129)

___

### onPointerLeave

▸ **onPointerLeave**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:137](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L137)

___

### onPointerMove

▸ **onPointerMove**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:113](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L113)

___

### onPointerOut

▸ **onPointerOut**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:133](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L133)

___

### onPointerOver

▸ **onPointerOver**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:125](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L125)

___

### onPointerUp

▸ **onPointerUp**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:117](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L117)
