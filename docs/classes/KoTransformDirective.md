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

• **new KoTransformDirective**(`nestable`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nestable` | [`KoNestable`](KoNestable.md) |

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:25](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L25)

## Properties

### koTransform

• **koTransform**: `EventEmitter`<`KonvaEventObject`<`any`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:14](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L14)

___

### koTransformEnd

• **koTransformEnd**: `EventEmitter`<`KonvaEventObject`<`any`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:17](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L17)

___

### koTransformStart

• **koTransformStart**: `EventEmitter`<`KonvaEventObject`<`any`\>\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:11](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L11)

___

### node

• `Private` **node**: [`KoNestableNode`](../modules.md#konestablenode)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:19](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L19)

___

### onTranformListener

• **onTranformListener**: (`event`: `KonvaEventObject`<`any`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`any`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:23](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L23)

___

### onTransformEndListener

• **onTransformEndListener**: (`event`: `KonvaEventObject`<`any`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`any`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:22](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L22)

___

### onTransformStarterListener

• **onTransformStarterListener**: (`event`: `KonvaEventObject`<`any`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`any`\> |

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:21](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L21)

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:46](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L46)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:39](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L39)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:36](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L36)

___

### onTransform

▸ **onTransform**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`any`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:60](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L60)

___

### onTransformEnd

▸ **onTransformEnd**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`any`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:56](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L56)

___

### onTransformStart

▸ **onTransformStart**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KonvaEventObject`<`any`\> |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:52](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L52)
