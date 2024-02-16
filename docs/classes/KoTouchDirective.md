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

• **new KoTouchDirective**(`nestable`, `stage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nestable` | [`KoNestable`](KoNestable.md) |
| `stage` | [`KoStageComponent`](KoStageComponent.md) |

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:38

## Properties

### hovering

• **hovering**: `boolean` = `false`

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:27

___

### koTouchDblTap

• **koTouchDblTap**: `EventEmitter`<`KonvaEventObject`<`TouchEvent`\>\>

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:24

___

### koTouchEnd

• **koTouchEnd**: `EventEmitter`<`KonvaEventObject`<`TouchEvent`\>\>

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:18

___

### koTouchMove

• **koTouchMove**: `EventEmitter`<`KonvaEventObject`<`TouchEvent`\>\>

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:15

___

### koTouchStart

• **koTouchStart**: `EventEmitter`<`KonvaEventObject`<`TouchEvent`\>\>

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:12

___

### koTouchTap

• **koTouchTap**: `EventEmitter`<`KonvaEventObject`<`TouchEvent`\>\>

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:21

___

### node

• `Private` **node**: [`KoNestableNode`](../modules.md#konestablenode)

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:29

___

### onTouchDblTapListener

• **onTouchDblTapListener**: (`event`: `KonvaEventObject`<`TouchEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`TouchEvent`\> |

##### Returns

`void`

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:35

___

### onTouchEndListener

• **onTouchEndListener**: (`event`: `KonvaEventObject`<`TouchEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`TouchEvent`\> |

##### Returns

`void`

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:33

___

### onTouchMoveListener

• **onTouchMoveListener**: (`event`: `KonvaEventObject`<`TouchEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`TouchEvent`\> |

##### Returns

`void`

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:32

___

### onTouchStartListener

• **onTouchStartListener**: (`event`: `KonvaEventObject`<`TouchEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`TouchEvent`\> |

##### Returns

`void`

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:31

___

### onTouchTapListener

• **onTouchTapListener**: (`event`: `KonvaEventObject`<`TouchEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`TouchEvent`\> |

##### Returns

`void`

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:34

___

### sub

• **sub**: `Subscription`

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:26

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:67

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:54

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:51

___

### onTouchDblTap

▸ **onTouchDblTap**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`TouchEvent`\> |

#### Returns

`void`

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:94

___

### onTouchEnd

▸ **onTouchEnd**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`TouchEvent`\> |

#### Returns

`void`

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:86

___

### onTouchMove

▸ **onTouchMove**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`TouchEvent`\> |

#### Returns

`void`

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:82

___

### onTouchStart

▸ **onTouchStart**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`TouchEvent`\> |

#### Returns

`void`

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:78

___

### onTouchTap

▸ **onTouchTap**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`TouchEvent`\> |

#### Returns

`void`

#### Defined in

projects/ngx-konva/src/lib/directives/ko-touch.directive.ts:90
