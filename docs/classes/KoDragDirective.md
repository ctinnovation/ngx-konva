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

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:25](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L25)

## Properties

### koDragEnd

• **koDragEnd**: `EventEmitter`<`KonvaEventObject`<`DragEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:17](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L17)

___

### koDragMove

• **koDragMove**: `EventEmitter`<`KonvaEventObject`<`DragEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:14](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L14)

___

### koDragStart

• **koDragStart**: `EventEmitter`<`KonvaEventObject`<`DragEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:11](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L11)

___

### node

• `Private` **node**: [`KoNestableNode`](../modules.md#konestablenode)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:19](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L19)

___

### onDragEndListener

• **onDragEndListener**: (`event`: `KonvaEventObject`<`DragEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`DragEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:22](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L22)

___

### onDragMoveListener

• **onDragMoveListener**: (`event`: `KonvaEventObject`<`DragEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`DragEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:23](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L23)

___

### onDragStarterListener

• **onDragStarterListener**: (`event`: `KonvaEventObject`<`DragEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`DragEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:21](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L21)

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:46](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L46)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:39](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L39)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:36](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L36)

___

### onDragEnd

▸ **onDragEnd**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`DragEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:56](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L56)

___

### onDragMove

▸ **onDragMove**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`DragEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:60](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L60)

___

### onDragStart

▸ **onDragStart**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`DragEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-drag.directive.ts:52](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/directives/ko-drag.directive.ts#L52)
