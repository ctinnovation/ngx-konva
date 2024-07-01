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

• **new KoDragDirective**(`nestable`): [`KoDragDirective`](KoDragDirective.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nestable` | [`KoNestable`](KoNestable.md) |

#### Returns

[`KoDragDirective`](KoDragDirective.md)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:30](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L30)

## Properties

### koDragEnd

• **koDragEnd**: `EventEmitter`\<`KonvaEventObject`\<`DragEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:22](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L22)

___

### koDragMove

• **koDragMove**: `EventEmitter`\<`KonvaEventObject`\<`DragEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:19](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L19)

___

### koDragStart

• **koDragStart**: `EventEmitter`\<`KonvaEventObject`\<`DragEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:16](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L16)

___

### node

• `Private` **node**: [`KoNestableNode`](../modules.md#konestablenode)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:24](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L24)

___

### onDragEndListener

• **onDragEndListener**: (`event`: `KonvaEventObject`\<`DragEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`DragEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:27](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L27)

___

### onDragMoveListener

• **onDragMoveListener**: (`event`: `KonvaEventObject`\<`DragEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`DragEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:28](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L28)

___

### onDragStarterListener

• **onDragStarterListener**: (`event`: `KonvaEventObject`\<`DragEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`DragEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:26](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L26)

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:51](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L51)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:44](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L44)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:41](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L41)

___

### onDragEnd

▸ **onDragEnd**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`DragEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:61](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L61)

___

### onDragMove

▸ **onDragMove**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`DragEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:65](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L65)

___

### onDragStart

▸ **onDragStart**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`DragEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:57](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L57)
