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

[lib/ko-layer.component.ts:41](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-layer.component.ts#L41)

## Properties

### \_config

• `Private` **\_config**: `LayerConfig` = `{}`

#### Defined in

[lib/ko-layer.component.ts:23](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-layer.component.ts#L23)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`<`Layer`\>

#### Defined in

[lib/ko-layer.component.ts:39](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-layer.component.ts#L39)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<`Layer`\>

#### Defined in

[lib/ko-layer.component.ts:36](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-layer.component.ts#L36)

___

### children

• **children**: `QueryList`<`KoNestable`\>

#### Defined in

[lib/ko-layer.component.ts:18](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-layer.component.ts#L18)

___

### id

• **id**: `string`

#### Inherited from

KoNestable.id

#### Defined in

[lib/ko-nestable.ts:24](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-nestable.ts#L24)

___

### layer

• **layer**: `Layer`

#### Defined in

[lib/ko-layer.component.ts:20](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-layer.component.ts#L20)

___

### onNewItem

• **onNewItem**: `EventEmitter`<`Layer` \| `Shape`\>

#### Defined in

[lib/ko-layer.component.ts:33](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-layer.component.ts#L33)

___

### sub

• **sub**: `Subscription`

#### Defined in

[lib/ko-layer.component.ts:21](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-layer.component.ts#L21)

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

[lib/ko-layer.component.ts:26](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-layer.component.ts#L26)

## Methods

### getKoItem

▸ **getKoItem**(): `Layer`

#### Returns

`Layer`

#### Overrides

KoNestable.getKoItem

#### Defined in

[lib/ko-layer.component.ts:62](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-layer.component.ts#L62)

___

### ngAfterViewInit

▸ **ngAfterViewInit**(): `void`

#### Returns

`void`

#### Implementation of

AfterViewInit.ngAfterViewInit

#### Defined in

[lib/ko-layer.component.ts:50](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-layer.component.ts#L50)

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

[lib/ko-layer.component.ts:57](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-layer.component.ts#L57)

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

[lib/ko-layer.component.ts:46](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-layer.component.ts#L46)

___

### updateChildren

▸ `Private` **updateChildren**(): `void`

#### Returns

`void`

#### Defined in

[lib/ko-layer.component.ts:73](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-layer.component.ts#L73)

___

### updateLayer

▸ **updateLayer**(): `void`

#### Returns

`void`

#### Defined in

[lib/ko-layer.component.ts:66](https://github.com/giovanni-bertoncelli/ngx-konva/blob/9d6a688/projects/ngx-konva/src/lib/ko-layer.component.ts#L66)
