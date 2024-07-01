[ngx-konva](../README.md) / [Exports](../modules.md) / KoTouchDirective

# Class: KoTouchDirective

## Implements

- `OnInit`
- `OnDestroy`

## Table of contents

### Constructors

- [constructor](KoTouchDirective.md#constructor)

### Properties

- [hovering](KoTouchDirective.md#hovering)
- [koTouchDblTap](KoTouchDirective.md#kotouchdbltap)
- [koTouchEnd](KoTouchDirective.md#kotouchend)
- [koTouchMove](KoTouchDirective.md#kotouchmove)
- [koTouchStart](KoTouchDirective.md#kotouchstart)
- [koTouchTap](KoTouchDirective.md#kotouchtap)
- [node](KoTouchDirective.md#node)
- [onTouchDblTapListener](KoTouchDirective.md#ontouchdbltaplistener)
- [onTouchEndListener](KoTouchDirective.md#ontouchendlistener)
- [onTouchMoveListener](KoTouchDirective.md#ontouchmovelistener)
- [onTouchStartListener](KoTouchDirective.md#ontouchstartlistener)
- [onTouchTapListener](KoTouchDirective.md#ontouchtaplistener)
- [sub](KoTouchDirective.md#sub)

### Methods

- [addListeners](KoTouchDirective.md#addlisteners)
- [ngOnDestroy](KoTouchDirective.md#ngondestroy)
- [ngOnInit](KoTouchDirective.md#ngoninit)
- [onTouchDblTap](KoTouchDirective.md#ontouchdbltap)
- [onTouchEnd](KoTouchDirective.md#ontouchend)
- [onTouchMove](KoTouchDirective.md#ontouchmove)
- [onTouchStart](KoTouchDirective.md#ontouchstart)
- [onTouchTap](KoTouchDirective.md#ontouchtap)

## Constructors

### constructor

• **new KoTouchDirective**(`nestable`, `stage`): [`KoTouchDirective`](KoTouchDirective.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nestable` | [`KoNestable`](KoNestable.md) |
| `stage` | [`KoStageComponent`](KoStageComponent.md) |

#### Returns

[`KoTouchDirective`](KoTouchDirective.md)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:43](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L43)

## Properties

### hovering

• **hovering**: `boolean` = `false`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:32](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L32)

___

### koTouchDblTap

• **koTouchDblTap**: `EventEmitter`\<`KonvaEventObject`\<`TouchEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:29](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L29)

___

### koTouchEnd

• **koTouchEnd**: `EventEmitter`\<`KonvaEventObject`\<`TouchEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:23](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L23)

___

### koTouchMove

• **koTouchMove**: `EventEmitter`\<`KonvaEventObject`\<`TouchEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:20](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L20)

___

### koTouchStart

• **koTouchStart**: `EventEmitter`\<`KonvaEventObject`\<`TouchEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:17](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L17)

___

### koTouchTap

• **koTouchTap**: `EventEmitter`\<`KonvaEventObject`\<`TouchEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:26](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L26)

___

### node

• `Private` **node**: [`KoNestableNode`](../modules.md#konestablenode)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:34](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L34)

___

### onTouchDblTapListener

• **onTouchDblTapListener**: (`event`: `KonvaEventObject`\<`TouchEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`TouchEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:40](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L40)

___

### onTouchEndListener

• **onTouchEndListener**: (`event`: `KonvaEventObject`\<`TouchEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`TouchEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:38](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L38)

___

### onTouchMoveListener

• **onTouchMoveListener**: (`event`: `KonvaEventObject`\<`TouchEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`TouchEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:37](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L37)

___

### onTouchStartListener

• **onTouchStartListener**: (`event`: `KonvaEventObject`\<`TouchEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`TouchEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:36](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L36)

___

### onTouchTapListener

• **onTouchTapListener**: (`event`: `KonvaEventObject`\<`TouchEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`TouchEvent`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:39](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L39)

___

### sub

• **sub**: `Subscription`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:31](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L31)

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:72](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L72)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:59](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L59)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:56](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L56)

___

### onTouchDblTap

▸ **onTouchDblTap**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`TouchEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:99](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L99)

___

### onTouchEnd

▸ **onTouchEnd**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`TouchEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:91](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L91)

___

### onTouchMove

▸ **onTouchMove**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`TouchEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:87](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L87)

___

### onTouchStart

▸ **onTouchStart**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`TouchEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:83](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L83)

___

### onTouchTap

▸ **onTouchTap**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`TouchEvent`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:95](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L95)
