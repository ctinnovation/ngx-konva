[ngx-konva](../README.md) / [Exports](../modules.md) / KoTransformDirective

# Class: KoTransformDirective

## Implements

- `OnInit`
- `OnDestroy`

## Table of contents

### Constructors

- [constructor](KoTransformDirective.md#constructor)

### Properties

- [koTransform](KoTransformDirective.md#kotransform)
- [koTransformEnd](KoTransformDirective.md#kotransformend)
- [koTransformStart](KoTransformDirective.md#kotransformstart)
- [node](KoTransformDirective.md#node)
- [onTranformListener](KoTransformDirective.md#ontranformlistener)
- [onTransformEndListener](KoTransformDirective.md#ontransformendlistener)
- [onTransformStarterListener](KoTransformDirective.md#ontransformstarterlistener)

### Methods

- [addListeners](KoTransformDirective.md#addlisteners)
- [ngOnDestroy](KoTransformDirective.md#ngondestroy)
- [ngOnInit](KoTransformDirective.md#ngoninit)
- [onTransform](KoTransformDirective.md#ontransform)
- [onTransformEnd](KoTransformDirective.md#ontransformend)
- [onTransformStart](KoTransformDirective.md#ontransformstart)

## Constructors

### constructor

• **new KoTransformDirective**(`nestable`): [`KoTransformDirective`](KoTransformDirective.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nestable` | [`KoNestable`](KoNestable.md) |

#### Returns

[`KoTransformDirective`](KoTransformDirective.md)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:30](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L30)

## Properties

### koTransform

• **koTransform**: `EventEmitter`\<`KonvaEventObject`\<`any`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:19](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L19)

___

### koTransformEnd

• **koTransformEnd**: `EventEmitter`\<`KonvaEventObject`\<`any`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:22](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L22)

___

### koTransformStart

• **koTransformStart**: `EventEmitter`\<`KonvaEventObject`\<`any`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:16](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L16)

___

### node

• `Private` **node**: [`KoNestableNode`](../modules.md#konestablenode)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:24](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L24)

___

### onTranformListener

• **onTranformListener**: (`event`: `KonvaEventObject`\<`any`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`any`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:28](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L28)

___

### onTransformEndListener

• **onTransformEndListener**: (`event`: `KonvaEventObject`\<`any`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`any`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:27](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L27)

___

### onTransformStarterListener

• **onTransformStarterListener**: (`event`: `KonvaEventObject`\<`any`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`any`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:26](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L26)

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:51](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L51)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:44](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L44)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:41](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L41)

___

### onTransform

▸ **onTransform**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`any`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:65](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L65)

___

### onTransformEnd

▸ **onTransformEnd**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`any`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:61](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L61)

___

### onTransformStart

▸ **onTransformStart**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`\<`any`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:57](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L57)
