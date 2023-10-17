[ngx-konva](../README.md) / [Exports](../modules.md) / KoLayerComponent

# Class: KoLayerComponent

## Hierarchy

- `KoNestable`

  ↳ **`KoLayerComponent`**

## Implements

- `OnInit`
- `OnDestroy`
- `AfterViewInit`

## Table of contents

### Constructors

- [constructor](KoLayerComponent.md#constructor)

### Properties

- [\_config](KoLayerComponent.md#_config)
- [afterUpdate](KoLayerComponent.md#afterupdate)
- [beforeUpdate](KoLayerComponent.md#beforeupdate)
- [children](KoLayerComponent.md#children)
- [id](KoLayerComponent.md#id)
- [layer](KoLayerComponent.md#layer)
- [onNewItem](KoLayerComponent.md#onnewitem)
- [sub](KoLayerComponent.md#sub)

### Accessors

- [config](KoLayerComponent.md#config)

### Methods

- [getKoItem](KoLayerComponent.md#getkoitem)
- [ngAfterViewInit](KoLayerComponent.md#ngafterviewinit)
- [ngOnDestroy](KoLayerComponent.md#ngondestroy)
- [ngOnInit](KoLayerComponent.md#ngoninit)
- [updateChildren](KoLayerComponent.md#updatechildren)
- [updateLayer](KoLayerComponent.md#updatelayer)

## Constructors

### constructor

• **new KoLayerComponent**()

#### Overrides

KoNestable.constructor

#### Defined in

[lib/ko-layer.component.ts:42](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-layer.component.ts#L42)

## Properties

### \_config

• `Private` **\_config**: `LayerConfig` = `{}`

#### Defined in

[lib/ko-layer.component.ts:24](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-layer.component.ts#L24)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`<`Layer`\>

#### Defined in

[lib/ko-layer.component.ts:40](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-layer.component.ts#L40)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<`Layer`\>

#### Defined in

[lib/ko-layer.component.ts:37](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-layer.component.ts#L37)

___

### children

• **children**: `QueryList`<`KoNestable`\>

#### Defined in

[lib/ko-layer.component.ts:19](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-layer.component.ts#L19)

___

### id

• **id**: `string`

#### Inherited from

KoNestable.id

#### Defined in

[lib/ko-nestable.ts:8](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-nestable.ts#L8)

___

### layer

• **layer**: `Layer`

#### Defined in

[lib/ko-layer.component.ts:21](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-layer.component.ts#L21)

___

### onNewItem

• **onNewItem**: `EventEmitter`<`Layer` \| [`KoShape`](../modules.md#koshape)\>

#### Defined in

[lib/ko-layer.component.ts:34](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-layer.component.ts#L34)

___

### sub

• **sub**: `Subscription`

#### Defined in

[lib/ko-layer.component.ts:22](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-layer.component.ts#L22)

## Accessors

### config

• `set` **config**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `LayerConfig` |

#### Returns

`void`

#### Defined in

[lib/ko-layer.component.ts:27](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-layer.component.ts#L27)

## Methods

### getKoItem

▸ **getKoItem**(): `Layer`

#### Returns

`Layer`

#### Overrides

KoNestable.getKoItem

#### Defined in

[lib/ko-layer.component.ts:63](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-layer.component.ts#L63)

___

### ngAfterViewInit

▸ **ngAfterViewInit**(): `void`

#### Returns

`void`

#### Implementation of

AfterViewInit.ngAfterViewInit

#### Defined in

[lib/ko-layer.component.ts:51](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-layer.component.ts#L51)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Overrides

KoNestable.ngOnDestroy

#### Defined in

[lib/ko-layer.component.ts:58](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-layer.component.ts#L58)

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

[lib/ko-layer.component.ts:47](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-layer.component.ts#L47)

___

### updateChildren

▸ `Private` **updateChildren**(): `void`

#### Returns

`void`

#### Defined in

[lib/ko-layer.component.ts:74](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-layer.component.ts#L74)

___

### updateLayer

▸ **updateLayer**(): `void`

#### Returns

`void`

#### Defined in

[lib/ko-layer.component.ts:67](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-layer.component.ts#L67)
