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

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:38](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L38)

## Properties

### hovering

• **hovering**: `boolean` = `false`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:27](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L27)

___

### koTouchDblTap

• **koTouchDblTap**: `EventEmitter`\<`KonvaEventObject`\<`TouchEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:24](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L24)

___

### koTouchEnd

• **koTouchEnd**: `EventEmitter`\<`KonvaEventObject`\<`TouchEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:18](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L18)

___

### koTouchMove

• **koTouchMove**: `EventEmitter`\<`KonvaEventObject`\<`TouchEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:15](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L15)

___

### koTouchStart

• **koTouchStart**: `EventEmitter`\<`KonvaEventObject`\<`TouchEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:12](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L12)

___

### koTouchTap

• **koTouchTap**: `EventEmitter`\<`KonvaEventObject`\<`TouchEvent`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:21](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L21)

___

### node

• `Private` **node**: [`KoNestableNode`](../modules.md#konestablenode)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:29](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L29)

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

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:35](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L35)

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

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:33](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L33)

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

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:32](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L32)

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

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:31](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L31)

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

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:34](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L34)

___

### sub

• **sub**: `Subscription`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:26](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L26)

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:67](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L67)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:54](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L54)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:51](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L51)

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

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:94](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L94)

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

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:86](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L86)

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

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:82](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L82)

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

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:78](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L78)

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

[projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:90](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/directives/ko-touch.directive.ts#L90)
