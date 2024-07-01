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

• **new KoPointerDirective**(`nestable`, `stage`): [`KoPointerDirective`](KoPointerDirective.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nestable` | [`KoNestable`](KoNestable.md) |
| `stage` | [`KoStageComponent`](KoStageComponent.md) |

#### Returns

[`KoPointerDirective`](KoPointerDirective.md)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:63](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L63)

## Properties

### hovering

• **hovering**: `boolean` = `false`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:47](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L47)

___

### koPointerCancel

• **koPointerCancel**: `EventEmitter`\<`KonvaEventObject`\<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:26](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L26)

___

### koPointerClick

• **koPointerClick**: `EventEmitter`\<`KonvaEventObject`\<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:41](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L41)

___

### koPointerDblClick

• **koPointerDblClick**: `EventEmitter`\<`KonvaEventObject`\<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:44](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L44)

___

### koPointerDown

• **koPointerDown**: `EventEmitter`\<`KonvaEventObject`\<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:17](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L17)

___

### koPointerEnter

• **koPointerEnter**: `EventEmitter`\<`KonvaEventObject`\<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:32](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L32)

___

### koPointerLeave

• **koPointerLeave**: `EventEmitter`\<`KonvaEventObject`\<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:38](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L38)

___

### koPointerMove

• **koPointerMove**: `EventEmitter`\<`KonvaEventObject`\<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:20](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L20)

___

### koPointerOut

• **koPointerOut**: `EventEmitter`\<`KonvaEventObject`\<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:35](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L35)

___

### koPointerOver

• **koPointerOver**: `EventEmitter`\<`KonvaEventObject`\<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:29](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L29)

___

### koPointerUp

• **koPointerUp**: `EventEmitter`\<`KonvaEventObject`\<`PointerEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:23](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L23)

___

### node

• `Private` **node**: [`KoNestableNode`](../modules.md#konestablenode)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:49](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L49)

___

### onPointerCancelListener

• **onPointerCancelListener**: (`event`: `KonvaEventObject`\<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:54](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L54)

___

### onPointerClickListener

• **onPointerClickListener**: (`event`: `KonvaEventObject`\<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:59](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L59)

___

### onPointerDblClickListener

• **onPointerDblClickListener**: (`event`: `KonvaEventObject`\<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:60](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L60)

___

### onPointerDownListener

• **onPointerDownListener**: (`event`: `KonvaEventObject`\<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:51](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L51)

___

### onPointerEnterListener

• **onPointerEnterListener**: (`event`: `KonvaEventObject`\<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:56](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L56)

___

### onPointerLeaveListener

• **onPointerLeaveListener**: (`event`: `KonvaEventObject`\<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:58](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L58)

___

### onPointerMoveListener

• **onPointerMoveListener**: (`event`: `KonvaEventObject`\<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:52](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L52)

___

### onPointerOutListener

• **onPointerOutListener**: (`event`: `KonvaEventObject`\<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:57](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L57)

___

### onPointerOverListener

• **onPointerOverListener**: (`event`: `KonvaEventObject`\<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:55](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L55)

___

### onPointerUpListener

• **onPointerUpListener**: (`event`: `KonvaEventObject`\<`PointerEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:53](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L53)

___

### sub

• **sub**: `Subscription`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:46](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L46)

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:97](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L97)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:79](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L79)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:76](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L76)

___

### onPointerCancel

▸ **onPointerCancel**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:126](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L126)

___

### onPointerClick

▸ **onPointerClick**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:146](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L146)

___

### onPointerDblClick

▸ **onPointerDblClick**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:150](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L150)

___

### onPointerDown

▸ **onPointerDown**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:114](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L114)

___

### onPointerEnter

▸ **onPointerEnter**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:134](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L134)

___

### onPointerLeave

▸ **onPointerLeave**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:142](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L142)

___

### onPointerMove

▸ **onPointerMove**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:118](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L118)

___

### onPointerOut

▸ **onPointerOut**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:138](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L138)

___

### onPointerOver

▸ **onPointerOver**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:130](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L130)

___

### onPointerUp

▸ **onPointerUp**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`PointerEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts:122](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-pointer.directive.ts#L122)
