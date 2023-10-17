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

[lib/components/ko-layer.component.ts:43](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L43)

## Properties

### \_config

• `Private` **\_config**: `LayerConfig` = `{}`

#### Defined in

[lib/components/ko-layer.component.ts:25](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L25)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`<`Layer`\>

#### Defined in

[lib/components/ko-layer.component.ts:41](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L41)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<`Layer`\>

#### Defined in

[lib/components/ko-layer.component.ts:38](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L38)

___

### children

• **children**: `QueryList`<`KoNestable`\>

#### Defined in

[lib/components/ko-layer.component.ts:20](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L20)

___

### id

• **id**: `string`

#### Inherited from

KoNestable.id

#### Defined in

[lib/common/ko-nestable.ts:11](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/common/ko-nestable.ts#L11)

___

### layer

• **layer**: `Layer`

#### Defined in

[lib/components/ko-layer.component.ts:22](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L22)

___

### onNewItem

• **onNewItem**: `EventEmitter`<`Layer` \| `Group` \| [`KoShape`](../modules.md#koshape)\>

#### Defined in

[lib/components/ko-layer.component.ts:35](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L35)

___

### sub

• **sub**: `Subscription`

#### Defined in

[lib/components/ko-layer.component.ts:23](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L23)

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

[lib/components/ko-layer.component.ts:28](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L28)

## Methods

### getKoItem

▸ **getKoItem**(): `Layer`

#### Returns

`Layer`

#### Overrides

KoNestable.getKoItem

#### Defined in

[lib/components/ko-layer.component.ts:64](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L64)

___

### ngAfterViewInit

▸ **ngAfterViewInit**(): `void`

#### Returns

`void`

#### Implementation of

AfterViewInit.ngAfterViewInit

#### Defined in

[lib/components/ko-layer.component.ts:52](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L52)

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

[lib/components/ko-layer.component.ts:59](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L59)

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

[lib/components/ko-layer.component.ts:48](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L48)

___

### updateChildren

▸ `Private` **updateChildren**(): `void`

#### Returns

`void`

#### Defined in

[lib/components/ko-layer.component.ts:75](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L75)

___

### updateLayer

▸ **updateLayer**(): `void`

#### Returns

`void`

#### Defined in

[lib/components/ko-layer.component.ts:68](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-layer.component.ts#L68)
