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

• **new KoMouseDirective**(`nestable`, `stage`): [`KoMouseDirective`](KoMouseDirective.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nestable` | [`KoNestable`](KoNestable.md) |
| `stage` | [`KoStageComponent`](KoStageComponent.md) |

#### Returns

[`KoMouseDirective`](KoMouseDirective.md)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:63](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L63)

## Properties

### hovering

• **hovering**: `boolean` = `false`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:47](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L47)

___

### koClick

• **koClick**: `EventEmitter`\<`KonvaEventObject`\<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:41](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L41)

___

### koDblclick

• **koDblclick**: `EventEmitter`\<`KonvaEventObject`\<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:44](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L44)

___

### koMouseDown

• **koMouseDown**: `EventEmitter`\<`KonvaEventObject`\<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:17](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L17)

___

### koMouseEnter

• **koMouseEnter**: `EventEmitter`\<`KonvaEventObject`\<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:32](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L32)

___

### koMouseLeave

• **koMouseLeave**: `EventEmitter`\<`KonvaEventObject`\<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:26](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L26)

___

### koMouseMove

• **koMouseMove**: `EventEmitter`\<`KonvaEventObject`\<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:20](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L20)

___

### koMouseOut

• **koMouseOut**: `EventEmitter`\<`KonvaEventObject`\<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:38](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L38)

___

### koMouseOver

• **koMouseOver**: `EventEmitter`\<`KonvaEventObject`\<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:29](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L29)

___

### koMouseUp

• **koMouseUp**: `EventEmitter`\<`KonvaEventObject`\<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:23](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L23)

___

### koMouseWheel

• **koMouseWheel**: `EventEmitter`\<`KonvaEventObject`\<`MouseEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:35](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L35)

___

### node

• `Private` **node**: [`KoNestableNode`](../modules.md#konestablenode)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:49](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L49)

___

### onClickListener

• **onClickListener**: (`event`: `KonvaEventObject`\<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:59](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L59)

___

### onDblclickListener

• **onDblclickListener**: (`event`: `KonvaEventObject`\<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:60](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L60)

___

### onMouseDownListener

• **onMouseDownListener**: (`event`: `KonvaEventObject`\<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:51](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L51)

___

### onMouseEnterListener

• **onMouseEnterListener**: (`event`: `KonvaEventObject`\<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:56](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L56)

___

### onMouseLeaveListener

• **onMouseLeaveListener**: (`event`: `KonvaEventObject`\<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:54](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L54)

___

### onMouseMoveListener

• **onMouseMoveListener**: (`event`: `KonvaEventObject`\<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:52](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L52)

___

### onMouseOutListener

• **onMouseOutListener**: (`event`: `KonvaEventObject`\<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:57](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L57)

___

### onMouseOverListener

• **onMouseOverListener**: (`event`: `KonvaEventObject`\<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:55](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L55)

___

### onMouseUpListener

• **onMouseUpListener**: (`event`: `KonvaEventObject`\<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:53](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L53)

___

### onMouseWheelListener

• **onMouseWheelListener**: (`event`: `KonvaEventObject`\<`MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:58](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L58)

___

### sub

• **sub**: `Subscription`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:46](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L46)

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:97](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L97)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:79](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L79)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:76](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L76)

___

### onClick

▸ **onClick**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:146](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L146)

___

### onDblclick

▸ **onDblclick**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:150](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L150)

___

### onMouseDown

▸ **onMouseDown**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:118](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L118)

___

### onMouseEnter

▸ **onMouseEnter**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:134](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L134)

___

### onMouseLeave

▸ **onMouseLeave**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:142](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L142)

___

### onMouseMove

▸ **onMouseMove**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:122](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L122)

___

### onMouseOut

▸ **onMouseOut**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:138](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L138)

___

### onMouseOver

▸ **onMouseOver**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:130](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L130)

___

### onMouseUp

▸ **onMouseUp**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:126](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L126)

___

### onMouseWheel

▸ **onMouseWheel**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`MouseEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts:114](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-mouse.directive.ts#L114)
