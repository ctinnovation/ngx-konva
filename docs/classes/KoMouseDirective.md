[ngx-konva](../README.md) / [Exports](../modules.md) / KoMouseDirective

# Class: KoMouseDirective

## Implements

- `OnInit`
- `OnDestroy`

## Table of contents

### Constructors

- [constructor](KoMouseDirective.md#constructor)

### Properties

- [hovering](KoMouseDirective.md#hovering)
- [koClick](KoMouseDirective.md#koclick)
- [koDblclick](KoMouseDirective.md#kodblclick)
- [koMouseDown](KoMouseDirective.md#komousedown)
- [koMouseEnter](KoMouseDirective.md#komouseenter)
- [koMouseLeave](KoMouseDirective.md#komouseleave)
- [koMouseMove](KoMouseDirective.md#komousemove)
- [koMouseOut](KoMouseDirective.md#komouseout)
- [koMouseOver](KoMouseDirective.md#komouseover)
- [koMouseUp](KoMouseDirective.md#komouseup)
- [koMouseWheel](KoMouseDirective.md#komousewheel)
- [node](KoMouseDirective.md#node)
- [onClickListener](KoMouseDirective.md#onclicklistener)
- [onDblclickListener](KoMouseDirective.md#ondblclicklistener)
- [onMouseDownListener](KoMouseDirective.md#onmousedownlistener)
- [onMouseEnterListener](KoMouseDirective.md#onmouseenterlistener)
- [onMouseLeaveListener](KoMouseDirective.md#onmouseleavelistener)
- [onMouseMoveListener](KoMouseDirective.md#onmousemovelistener)
- [onMouseOutListener](KoMouseDirective.md#onmouseoutlistener)
- [onMouseOverListener](KoMouseDirective.md#onmouseoverlistener)
- [onMouseUpListener](KoMouseDirective.md#onmouseuplistener)
- [onMouseWheelListener](KoMouseDirective.md#onmousewheellistener)
- [sub](KoMouseDirective.md#sub)

### Methods

- [addListeners](KoMouseDirective.md#addlisteners)
- [ngOnDestroy](KoMouseDirective.md#ngondestroy)
- [ngOnInit](KoMouseDirective.md#ngoninit)
- [onClick](KoMouseDirective.md#onclick)
- [onDblclick](KoMouseDirective.md#ondblclick)
- [onMouseDown](KoMouseDirective.md#onmousedown)
- [onMouseEnter](KoMouseDirective.md#onmouseenter)
- [onMouseLeave](KoMouseDirective.md#onmouseleave)
- [onMouseMove](KoMouseDirective.md#onmousemove)
- [onMouseOut](KoMouseDirective.md#onmouseout)
- [onMouseOver](KoMouseDirective.md#onmouseover)
- [onMouseUp](KoMouseDirective.md#onmouseup)
- [onMouseWheel](KoMouseDirective.md#onmousewheel)

## Constructors

### constructor

• **new KoMouseDirective**(`nestable`, `stage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nestable` | [`KoNestable`](KoNestable.md) |
| `stage` | [`KoStageComponent`](KoStageComponent.md) |

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:58](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L58)

## Properties

### hovering

• **hovering**: `boolean` = `false`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:42](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L42)

___

### koClick

• **koClick**: `EventEmitter`<`KonvaEventObject`<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:36](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L36)

___

### koDblclick

• **koDblclick**: `EventEmitter`<`KonvaEventObject`<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:39](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L39)

___

### koMouseDown

• **koMouseDown**: `EventEmitter`<`KonvaEventObject`<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:12](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L12)

___

### koMouseEnter

• **koMouseEnter**: `EventEmitter`<`KonvaEventObject`<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:27](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L27)

___

### koMouseLeave

• **koMouseLeave**: `EventEmitter`<`KonvaEventObject`<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:21](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L21)

___

### koMouseMove

• **koMouseMove**: `EventEmitter`<`KonvaEventObject`<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:15](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L15)

___

### koMouseOut

• **koMouseOut**: `EventEmitter`<`KonvaEventObject`<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:33](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L33)

___

### koMouseOver

• **koMouseOver**: `EventEmitter`<`KonvaEventObject`<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:24](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L24)

___

### koMouseUp

• **koMouseUp**: `EventEmitter`<`KonvaEventObject`<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:18](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L18)

___

### koMouseWheel

• **koMouseWheel**: `EventEmitter`<`KonvaEventObject`<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:30](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L30)

___

### node

• `Private` **node**: [`KoNestableNode`](../modules.md#konestablenode)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:44](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L44)

___

### onClickListener

• **onClickListener**: (`event`: `KonvaEventObject`<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:54](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L54)

___

### onDblclickListener

• **onDblclickListener**: (`event`: `KonvaEventObject`<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:55](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L55)

___

### onMouseDownListener

• **onMouseDownListener**: (`event`: `KonvaEventObject`<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:46](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L46)

___

### onMouseEnterListener

• **onMouseEnterListener**: (`event`: `KonvaEventObject`<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:51](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L51)

___

### onMouseLeaveListener

• **onMouseLeaveListener**: (`event`: `KonvaEventObject`<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:49](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L49)

___

### onMouseMoveListener

• **onMouseMoveListener**: (`event`: `KonvaEventObject`<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:47](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L47)

___

### onMouseOutListener

• **onMouseOutListener**: (`event`: `KonvaEventObject`<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:52](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L52)

___

### onMouseOverListener

• **onMouseOverListener**: (`event`: `KonvaEventObject`<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:50](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L50)

___

### onMouseUpListener

• **onMouseUpListener**: (`event`: `KonvaEventObject`<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:48](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L48)

___

### onMouseWheelListener

• **onMouseWheelListener**: (`event`: `KonvaEventObject`<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:53](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L53)

___

### sub

• **sub**: `Subscription`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:41](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L41)

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:92](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L92)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:74](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L74)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:71](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L71)

___

### onClick

▸ **onClick**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:141](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L141)

___

### onDblclick

▸ **onDblclick**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:145](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L145)

___

### onMouseDown

▸ **onMouseDown**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:113](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L113)

___

### onMouseEnter

▸ **onMouseEnter**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:129](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L129)

___

### onMouseLeave

▸ **onMouseLeave**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:137](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L137)

___

### onMouseMove

▸ **onMouseMove**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:117](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L117)

___

### onMouseOut

▸ **onMouseOut**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:133](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L133)

___

### onMouseOver

▸ **onMouseOver**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:125](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L125)

___

### onMouseUp

▸ **onMouseUp**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:121](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L121)

___

### onMouseWheel

▸ **onMouseWheel**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:109](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L109)
