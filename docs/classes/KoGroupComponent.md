[ngx-konva](../README.md) / [Exports](../modules.md) / KoGroupComponent

# Class: KoGroupComponent

## Hierarchy

- `KoNestable`

  ↳ **`KoGroupComponent`**

## Implements

- `OnInit`
- `AfterViewInit`

## Table of contents

### Constructors

- [constructor](KoGroupComponent.md#constructor)

### Properties

- [\_config](KoGroupComponent.md#_config)
- [afterUpdate](KoGroupComponent.md#afterupdate)
- [beforeUpdate](KoGroupComponent.md#beforeupdate)
- [children](KoGroupComponent.md#children)
- [group](KoGroupComponent.md#group)
- [id](KoGroupComponent.md#id)
- [onNewItem](KoGroupComponent.md#onnewitem)
- [sub](KoGroupComponent.md#sub)

### Accessors

- [config](KoGroupComponent.md#config)

### Methods

- [getKoItem](KoGroupComponent.md#getkoitem)
- [ngAfterViewInit](KoGroupComponent.md#ngafterviewinit)
- [ngOnDestroy](KoGroupComponent.md#ngondestroy)
- [ngOnInit](KoGroupComponent.md#ngoninit)
- [updateChildren](KoGroupComponent.md#updatechildren)
- [updateGroup](KoGroupComponent.md#updategroup)

## Constructors

### constructor

• **new KoGroupComponent**()

#### Overrides

KoNestable.constructor

#### Defined in

[lib/components/ko-group.component.ts:42](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-group.component.ts#L42)

## Properties

### \_config

• `Private` **\_config**: `GroupConfig` = `{}`

#### Defined in

[lib/components/ko-group.component.ts:23](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-group.component.ts#L23)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`<`Group`\>

#### Defined in

[lib/components/ko-group.component.ts:38](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-group.component.ts#L38)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<`Group`\>

#### Defined in

[lib/components/ko-group.component.ts:35](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-group.component.ts#L35)

___

### children

• `Private` **children**: `QueryList`<`KoNestable`\>

#### Defined in

[lib/components/ko-group.component.ts:19](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-group.component.ts#L19)

___

### group

• **group**: `Group`

#### Defined in

[lib/components/ko-group.component.ts:21](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-group.component.ts#L21)

___

### id

• **id**: `string`

#### Inherited from

KoNestable.id

#### Defined in

[lib/common/ko-nestable.ts:11](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/common/ko-nestable.ts#L11)

___

### onNewItem

• **onNewItem**: `EventEmitter`<`Layer` \| `Group` \| [`KoShape`](../modules.md#koshape)\>

#### Defined in

[lib/components/ko-group.component.ts:32](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-group.component.ts#L32)

___

### sub

• **sub**: `Subscription`

#### Defined in

[lib/components/ko-group.component.ts:40](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-group.component.ts#L40)

## Accessors

### config

• `set` **config**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `GroupConfig` |

#### Returns

`void`

#### Defined in

[lib/components/ko-group.component.ts:25](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-group.component.ts#L25)

## Methods

### getKoItem

▸ **getKoItem**(): `Group`

#### Returns

`Group`

#### Overrides

KoNestable.getKoItem

#### Defined in

[lib/components/ko-group.component.ts:66](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-group.component.ts#L66)

___

### ngAfterViewInit

▸ **ngAfterViewInit**(): `void`

#### Returns

`void`

#### Implementation of

AfterViewInit.ngAfterViewInit

#### Defined in

[lib/components/ko-group.component.ts:51](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-group.component.ts#L51)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Overrides

KoNestable.ngOnDestroy

#### Defined in

[lib/components/ko-group.component.ts:61](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-group.component.ts#L61)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Overrides

KoNestable.ngOnInit

#### Defined in

[lib/components/ko-group.component.ts:47](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-group.component.ts#L47)

___

### updateChildren

▸ `Private` **updateChildren**(): `void`

#### Returns

`void`

#### Defined in

[lib/components/ko-group.component.ts:76](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-group.component.ts#L76)

___

### updateGroup

▸ `Private` **updateGroup**(): `void`

#### Returns

`void`

#### Defined in

[lib/components/ko-group.component.ts:70](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-group.component.ts#L70)
