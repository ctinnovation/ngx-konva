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
- [container](KoStageComponent.md#container)
- [onNewLayer](KoStageComponent.md#onnewlayer)
- [stage](KoStageComponent.md#stage)
- [sub](KoStageComponent.md#sub)

### Accessors

- [config](KoStageComponent.md#config)

### Methods

- [addChild](KoStageComponent.md#addchild)
- [ngAfterViewInit](KoStageComponent.md#ngafterviewinit)
- [ngOnDestroy](KoStageComponent.md#ngondestroy)
- [ngOnInit](KoStageComponent.md#ngoninit)
- [updateStage](KoStageComponent.md#updatestage)

## Constructors

### constructor

• **new KoStageComponent**(`container`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `ElementRef`<`any`\> |

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:43](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L43)

## Properties

### \_config

• `Private` **\_config**: [`StageConfigOptionalContainer`](../modules.md#stageconfigoptionalcontainer)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:26](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L26)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`<`Stage`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:21](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L21)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<`Stage`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:18](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L18)

___

### container

• **container**: `ElementRef`<`any`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:14](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L14)

___

### onNewLayer

• **onNewLayer**: `EventEmitter`<`Layer`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:24](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L24)

___

### stage

• **stage**: `Stage`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:15](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L15)

___

### sub

• `Private` **sub**: `Subscription`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:41](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L41)

## Accessors

### config

• `get` **config**(): [`StageConfigOptionalContainer`](../modules.md#stageconfigoptionalcontainer)

#### Returns

[`StageConfigOptionalContainer`](../modules.md#stageconfigoptionalcontainer)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:37](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L37)

• `set` **config**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`StageConfigOptionalContainer`](../modules.md#stageconfigoptionalcontainer) |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:29](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L29)

## Methods

### addChild

▸ **addChild**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `Layer` |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:64](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L64)

___

### ngAfterViewInit

▸ **ngAfterViewInit**(): `void`

#### Returns

`void`

#### Implementation of

AfterViewInit.ngAfterViewInit

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:56](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L56)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:59](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L59)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:54](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L54)

___

### updateStage

▸ `Private` **updateStage**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:76](https://github.com/ctinnovation/ngx-konva/blob/bd353eb/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L76)
