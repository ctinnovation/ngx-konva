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
| `nestable` | `KoNestable` |

#### Defined in

lib/directives/ko-transform.directive.ts:24

## Properties

### koTransform

• **koTransform**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

lib/directives/ko-transform.directive.ts:13

___

### koTransformEnd

• **koTransformEnd**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

lib/directives/ko-transform.directive.ts:16

___

### koTransformStart

• **koTransformStart**: `EventEmitter`<`KoNestableNode`\>

#### Defined in

lib/directives/ko-transform.directive.ts:10

___

### node

• `Private` **node**: `KoNestableNode`

#### Defined in

lib/directives/ko-transform.directive.ts:18

___

### onTranformListener

• **onTranformListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

lib/directives/ko-transform.directive.ts:22

___

### onTransformEndListener

• **onTransformEndListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

lib/directives/ko-transform.directive.ts:21

___

### onTransformStarterListener

• **onTransformStarterListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

lib/directives/ko-transform.directive.ts:20

## Methods

### addListeners

▸ **addListeners**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-transform.directive.ts:45

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

lib/directives/ko-transform.directive.ts:38

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

lib/directives/ko-transform.directive.ts:35

___

### onTransform

▸ **onTransform**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-transform.directive.ts:59

___

### onTransformEnd

▸ **onTransformEnd**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-transform.directive.ts:55

___

### onTransformStart

▸ **onTransformStart**(): `void`

#### Returns

`void`

#### Defined in

lib/directives/ko-transform.directive.ts:51
