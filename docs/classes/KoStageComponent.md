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
- [draw$](KoStageComponent.md#draw$)
- [onNewLayer](KoStageComponent.md#onnewlayer)
- [stage](KoStageComponent.md#stage)
- [sub](KoStageComponent.md#sub)

### Accessors

- [config](KoStageComponent.md#config)

### Methods

- [addChild](KoStageComponent.md#addchild)
- [draw](KoStageComponent.md#draw)
- [ngAfterViewInit](KoStageComponent.md#ngafterviewinit)
- [ngOnDestroy](KoStageComponent.md#ngondestroy)
- [ngOnInit](KoStageComponent.md#ngoninit)
- [updateStage](KoStageComponent.md#updatestage)

## Constructors

### constructor

• **new KoStageComponent**(`container`): [`KoStageComponent`](KoStageComponent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `ElementRef`\<`any`\> |

#### Returns

[`KoStageComponent`](KoStageComponent.md)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:46](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L46)

## Properties

### \_config

• `Private` **\_config**: [`StageConfigOptionalContainer`](../modules.md#stageconfigoptionalcontainer)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:29](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L29)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`\<`Stage`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:24](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L24)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`\<`Stage`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:21](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L21)

___

### container

• **container**: `ElementRef`\<`any`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:15](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L15)

___

### draw$

• `Private` **draw$**: `Subject`\<`void`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:18](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L18)

___

### onNewLayer

• **onNewLayer**: `EventEmitter`\<`Layer`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:27](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L27)

___

### stage

• **stage**: `Stage`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:16](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L16)

___

### sub

• `Private` **sub**: `Subscription`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:44](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L44)

## Accessors

### config

• `get` **config**(): [`StageConfigOptionalContainer`](../modules.md#stageconfigoptionalcontainer)

#### Returns

[`StageConfigOptionalContainer`](../modules.md#stageconfigoptionalcontainer)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:40](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L40)

• `set` **config**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`StageConfigOptionalContainer`](../modules.md#stageconfigoptionalcontainer) |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:32](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L32)

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

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:72](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L72)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:94](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L94)

___

### ngAfterViewInit

▸ **ngAfterViewInit**(): `void`

#### Returns

`void`

#### Implementation of

AfterViewInit.ngAfterViewInit

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:64](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L64)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:67](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L67)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:62](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L62)

___

### updateStage

▸ **updateStage**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:84](https://github.com/ctinnovation/ngx-konva/blob/f47deef/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L84)
