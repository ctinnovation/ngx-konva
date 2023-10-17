[ngx-konva](../README.md) / [Exports](../modules.md) / KoImageComponent

# Class: KoImageComponent

## Hierarchy

- `KoNestable`

  ↳ **`KoImageComponent`**

## Implements

- `OnInit`

## Table of contents

### Constructors

- [constructor](KoImageComponent.md#constructor)

### Properties

- [\_config](KoImageComponent.md#_config)
- [\_image](KoImageComponent.md#_image)
- [\_src](KoImageComponent.md#_src)
- [afterUpdate](KoImageComponent.md#afterupdate)
- [beforeUpdate](KoImageComponent.md#beforeupdate)
- [centerOrigin](KoImageComponent.md#centerorigin)
- [id](KoImageComponent.md#id)
- [node](KoImageComponent.md#node)
- [onLoadListener](KoImageComponent.md#onloadlistener)

### Accessors

- [config](KoImageComponent.md#config)
- [src](KoImageComponent.md#src)

### Methods

- [\_afterRender](KoImageComponent.md#_afterrender)
- [\_beforeRender](KoImageComponent.md#_beforerender)
- [getKoItem](KoImageComponent.md#getkoitem)
- [ngOnDestroy](KoImageComponent.md#ngondestroy)
- [ngOnInit](KoImageComponent.md#ngoninit)
- [onImageLoad](KoImageComponent.md#onimageload)
- [updateShape](KoImageComponent.md#updateshape)

## Constructors

### constructor

• **new KoImageComponent**()

#### Overrides

KoNestable.constructor

#### Defined in

lib/components/ko-image.component.ts:48

## Properties

### \_config

• `Private` **\_config**: [`KoImageConfig`](../modules.md#koimageconfig) = `{}`

#### Defined in

lib/components/ko-image.component.ts:29

___

### \_image

• `Private` **\_image**: `HTMLImageElement`

#### Defined in

lib/components/ko-image.component.ts:20

___

### \_src

• `Private` `Optional` **\_src**: `string`

#### Defined in

lib/components/ko-image.component.ts:22

___

### afterUpdate

• **afterUpdate**: `EventEmitter`<[`KoShape`](../modules.md#koshape)\>

#### Defined in

lib/components/ko-image.component.ts:44

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<[`KoShape`](../modules.md#koshape)\>

#### Defined in

lib/components/ko-image.component.ts:41

___

### centerOrigin

• **centerOrigin**: `boolean` = `false`

#### Defined in

lib/components/ko-image.component.ts:38

___

### id

• **id**: `string`

#### Inherited from

KoNestable.id

#### Defined in

[lib/common/ko-nestable.ts:11](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/common/ko-nestable.ts#L11)

___

### node

• **node**: `Image`

#### Defined in

lib/components/ko-image.component.ts:18

___

### onLoadListener

• **onLoadListener**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

lib/components/ko-image.component.ts:46

## Accessors

### config

• `set` **config**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`KoImageConfig`](../modules.md#koimageconfig) |

#### Returns

`void`

#### Defined in

lib/components/ko-image.component.ts:31

___

### src

• `set` **src**(`s`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`void`

#### Defined in

lib/components/ko-image.component.ts:24

## Methods

### \_afterRender

▸ `Private` **_afterRender**(): `void`

#### Returns

`void`

#### Defined in

lib/components/ko-image.component.ts:78

___

### \_beforeRender

▸ `Private` **_beforeRender**(): `void`

#### Returns

`void`

#### Defined in

lib/components/ko-image.component.ts:74

___

### getKoItem

▸ **getKoItem**(): [`KoShape`](../modules.md#koshape)

#### Returns

[`KoShape`](../modules.md#koshape)

#### Overrides

KoNestable.getKoItem

#### Defined in

lib/components/ko-image.component.ts:62

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Overrides

KoNestable.ngOnDestroy

#### Defined in

lib/components/ko-image.component.ts:57

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Inherited from

KoNestable.ngOnInit

#### Defined in

[lib/common/ko-nestable.ts:17](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/common/ko-nestable.ts#L17)

___

### onImageLoad

▸ `Private` **onImageLoad**(): `void`

#### Returns

`void`

#### Defined in

lib/components/ko-image.component.ts:87

___

### updateShape

▸ `Private` **updateShape**(): `void`

#### Returns

`void`

#### Defined in

lib/components/ko-image.component.ts:66
