[ngx-konva](../README.md) / [Exports](../modules.md) / KoStageComponent

# Class: KoStageComponent

## Hierarchy

- **`KoStageComponent`**

  ↳ [`KoStageAutoScaleComponent`](KoStageAutoScaleComponent.md)

## Implements

- `OnInit`
- `OnDestroy`
- `AfterViewInit`

## Table of contents

### Constructors

- [constructor](KoStageComponent.md#constructor)

### Properties

- [\_config](KoStageComponent.md#_config)
- [afterUpdate](KoStageComponent.md#afterupdate)
- [beforeUpdate](KoStageComponent.md#beforeupdate)
- [children](KoStageComponent.md#children)
- [container](KoStageComponent.md#container)
- [onNewLayer](KoStageComponent.md#onnewlayer)
- [stage](KoStageComponent.md#stage)
- [sub](KoStageComponent.md#sub)

### Accessors

- [config](KoStageComponent.md#config)

### Methods

- [ngAfterViewInit](KoStageComponent.md#ngafterviewinit)
- [ngOnDestroy](KoStageComponent.md#ngondestroy)
- [ngOnInit](KoStageComponent.md#ngoninit)
- [updateLayers](KoStageComponent.md#updatelayers)
- [updateStage](KoStageComponent.md#updatestage)

## Constructors

### constructor

• **new KoStageComponent**(`container`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `ElementRef`<`any`\> |

#### Defined in

[lib/components/ko-stage.component.ts:45](https://github.com/giovanni-bertoncelli/ngx-konva/blob/66db3c0/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L45)

## Properties

### \_config

• `Private` **\_config**: [`StageConfigOptionalContainer`](../modules.md#stageconfigoptionalcontainer)

#### Defined in

[lib/components/ko-stage.component.ts:31](https://github.com/giovanni-bertoncelli/ngx-konva/blob/66db3c0/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L31)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`<`Stage`\>

#### Defined in

[lib/components/ko-stage.component.ts:26](https://github.com/giovanni-bertoncelli/ngx-konva/blob/66db3c0/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L26)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<`Stage`\>

#### Defined in

[lib/components/ko-stage.component.ts:23](https://github.com/giovanni-bertoncelli/ngx-konva/blob/66db3c0/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L23)

___

### children

• **children**: `QueryList`<`KoNestable`\>

#### Defined in

[lib/components/ko-stage.component.ts:18](https://github.com/giovanni-bertoncelli/ngx-konva/blob/66db3c0/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L18)

___

### container

• **container**: `ElementRef`<`any`\>

#### Defined in

[lib/components/ko-stage.component.ts:15](https://github.com/giovanni-bertoncelli/ngx-konva/blob/66db3c0/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L15)

___

### onNewLayer

• **onNewLayer**: `EventEmitter`<`Layer`\>

#### Defined in

[lib/components/ko-stage.component.ts:29](https://github.com/giovanni-bertoncelli/ngx-konva/blob/66db3c0/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L29)

___

### stage

• **stage**: `Stage`

#### Defined in

[lib/components/ko-stage.component.ts:20](https://github.com/giovanni-bertoncelli/ngx-konva/blob/66db3c0/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L20)

___

### sub

• `Private` **sub**: `Subscription`

#### Defined in

[lib/components/ko-stage.component.ts:43](https://github.com/giovanni-bertoncelli/ngx-konva/blob/66db3c0/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L43)

## Accessors

### config

• `set` **config**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`StageConfigOptionalContainer`](../modules.md#stageconfigoptionalcontainer) |

#### Returns

`void`

#### Defined in

[lib/components/ko-stage.component.ts:34](https://github.com/giovanni-bertoncelli/ngx-konva/blob/66db3c0/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L34)

## Methods

### ngAfterViewInit

▸ **ngAfterViewInit**(): `void`

#### Returns

`void`

#### Implementation of

AfterViewInit.ngAfterViewInit

#### Defined in

[lib/components/ko-stage.component.ts:58](https://github.com/giovanni-bertoncelli/ngx-konva/blob/66db3c0/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L58)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[lib/components/ko-stage.component.ts:68](https://github.com/giovanni-bertoncelli/ngx-konva/blob/66db3c0/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L68)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[lib/components/ko-stage.component.ts:56](https://github.com/giovanni-bertoncelli/ngx-konva/blob/66db3c0/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L56)

___

### updateLayers

▸ `Private` **updateLayers**(): `void`

#### Returns

`void`

#### Defined in

[lib/components/ko-stage.component.ts:73](https://github.com/giovanni-bertoncelli/ngx-konva/blob/66db3c0/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L73)

___

### updateStage

▸ `Private` **updateStage**(): `void`

#### Returns

`void`

#### Defined in

[lib/components/ko-stage.component.ts:95](https://github.com/giovanni-bertoncelli/ngx-konva/blob/66db3c0/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L95)
