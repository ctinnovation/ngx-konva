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

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:24](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L24)

## Properties

### koTransform

• **koTransform**: `EventEmitter`<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:13](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L13)

___

### koTransformEnd

• **koTransformEnd**: `EventEmitter`<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:16](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L16)

___

### koTransformStart

• **koTransformStart**: `EventEmitter`<[`KoNestableNode`](../modules.md#konestablenode)\>

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:10](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L10)

___

### node

• `Private` **node**: [`KoNestableNode`](../modules.md#konestablenode)

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:18](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L18)

___

### onTranformListener

• **onTranformListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:22](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L22)

___

### onTransformEndListener

• **onTransformEndListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:21](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L21)

___

### onTransformStarterListener

• **onTransformStarterListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:20](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L20)

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:45](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L45)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:38](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L38)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:35](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L35)

___

### onTransform

▸ **onTransform**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:59](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L59)

___

### onTransformEnd

▸ **onTransformEnd**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:55](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L55)

___

### onTransformStart

▸ **onTransformStart**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/directives/ko-transform.directive.ts:51](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/directives/ko-transform.directive.ts#L51)
