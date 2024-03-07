[ngx-konva](../README.md) / [Exports](../modules.md) / KoStageAutoScaleComponent

# Class: KoStageAutoScaleComponent

## Hierarchy

- [`KoStageComponent`](KoStageComponent.md)

  ↳ **`KoStageAutoScaleComponent`**

## Implements

- `OnInit`
- `OnDestroy`
- `AfterContentInit`

## Table of contents

### Constructors

- [constructor](KoStageAutoScaleComponent.md#constructor)

### Properties

- [\_additionalScale](KoStageAutoScaleComponent.md#_additionalscale)
- [afterUpdate](KoStageAutoScaleComponent.md#afterupdate)
- [beforeUpdate](KoStageAutoScaleComponent.md#beforeupdate)
- [cdRef](KoStageAutoScaleComponent.md#cdref)
- [container](KoStageAutoScaleComponent.md#container)
- [initDimensions](KoStageAutoScaleComponent.md#initdimensions)
- [initialDimensions](KoStageAutoScaleComponent.md#initialdimensions)
- [onNewLayer](KoStageAutoScaleComponent.md#onnewlayer)
- [parentContainer](KoStageAutoScaleComponent.md#parentcontainer)
- [resizeObserver](KoStageAutoScaleComponent.md#resizeobserver)
- [stage](KoStageAutoScaleComponent.md#stage)

### Accessors

- [additionalScale](KoStageAutoScaleComponent.md#additionalscale)
- [config](KoStageAutoScaleComponent.md#config)

### Methods

- [addChild](KoStageAutoScaleComponent.md#addchild)
- [ngAfterContentInit](KoStageAutoScaleComponent.md#ngaftercontentinit)
- [ngAfterViewInit](KoStageAutoScaleComponent.md#ngafterviewinit)
- [ngOnDestroy](KoStageAutoScaleComponent.md#ngondestroy)
- [ngOnInit](KoStageAutoScaleComponent.md#ngoninit)
- [onResize](KoStageAutoScaleComponent.md#onresize)
- [scaleStage](KoStageAutoScaleComponent.md#scalestage)

## Constructors

### constructor

• **new KoStageAutoScaleComponent**(`parentContainer`, `cdRef`): [`KoStageAutoScaleComponent`](KoStageAutoScaleComponent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentContainer` | `ElementRef`\<`HTMLDivElement`\> |
| `cdRef` | `ChangeDetectorRef` |

#### Returns

[`KoStageAutoScaleComponent`](KoStageAutoScaleComponent.md)

#### Overrides

[KoStageComponent](KoStageComponent.md).[constructor](KoStageComponent.md#constructor)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:30](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L30)

## Properties

### \_additionalScale

• `Private` **\_additionalScale**: `number` \| \{ `x`: `number` ; `y`: `number`  } = `1`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:17](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L17)

___

### afterUpdate

• **afterUpdate**: `EventEmitter`\<`Stage`\>

#### Inherited from

[KoStageComponent](KoStageComponent.md).[afterUpdate](KoStageComponent.md#afterupdate)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:21](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L21)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`\<`Stage`\>

#### Inherited from

[KoStageComponent](KoStageComponent.md).[beforeUpdate](KoStageComponent.md#beforeupdate)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:18](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L18)

___

### cdRef

• `Private` **cdRef**: `ChangeDetectorRef`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:32](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L32)

___

### container

• **container**: `ElementRef`\<`any`\>

#### Inherited from

[KoStageComponent](KoStageComponent.md).[container](KoStageComponent.md#container)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:14](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L14)

___

### initDimensions

• **initDimensions**: `EventEmitter`\<\{ `height`: `number` ; `width`: `number`  }\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:28](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L28)

___

### initialDimensions

• `Private` **initialDimensions**: ``null`` \| \{ `height`: `number` ; `width`: `number`  } = `null`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:14](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L14)

___

### onNewLayer

• **onNewLayer**: `EventEmitter`\<`Layer`\>

#### Inherited from

[KoStageComponent](KoStageComponent.md).[onNewLayer](KoStageComponent.md#onnewlayer)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:24](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L24)

___

### parentContainer

• `Private` **parentContainer**: `ElementRef`\<`HTMLDivElement`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:31](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L31)

___

### resizeObserver

• `Private` **resizeObserver**: `ResizeObserver`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:15](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L15)

___

### stage

• **stage**: `Stage`

#### Inherited from

[KoStageComponent](KoStageComponent.md).[stage](KoStageComponent.md#stage)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:15](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L15)

## Accessors

### additionalScale

• `get` **additionalScale**(): `number` \| \{ `x`: `number` ; `y`: `number`  }

#### Returns

`number` \| \{ `x`: `number` ; `y`: `number`  }

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:23](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L23)

• `set` **additionalScale**(`s`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` \| \{ `x`: `number` ; `y`: `number`  } |

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:19](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L19)

___

### config

• `get` **config**(): [`StageConfigOptionalContainer`](../modules.md#stageconfigoptionalcontainer)

#### Returns

[`StageConfigOptionalContainer`](../modules.md#stageconfigoptionalcontainer)

#### Inherited from

KoStageComponent.config

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:37](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L37)

• `set` **config**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`StageConfigOptionalContainer`](../modules.md#stageconfigoptionalcontainer) |

#### Returns

`void`

#### Inherited from

KoStageComponent.config

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:29](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L29)

## Methods

### addChild

▸ **addChild**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `Layer` |

#### Returns

`void`

#### Inherited from

[KoStageComponent](KoStageComponent.md).[addChild](KoStageComponent.md#addchild)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:64](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L64)

___

### ngAfterContentInit

▸ **ngAfterContentInit**(): `void`

#### Returns

`void`

#### Implementation of

AfterContentInit.ngAfterContentInit

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:54](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L54)

___

### ngAfterViewInit

▸ **ngAfterViewInit**(): `void`

#### Returns

`void`

#### Inherited from

[KoStageComponent](KoStageComponent.md).[ngAfterViewInit](KoStageComponent.md#ngafterviewinit)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:56](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L56)

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Overrides

[KoStageComponent](KoStageComponent.md).[ngOnDestroy](KoStageComponent.md#ngondestroy)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:58](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L58)

___

### ngOnInit

▸ **ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit

#### Overrides

[KoStageComponent](KoStageComponent.md).[ngOnInit](KoStageComponent.md#ngoninit)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:50](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L50)

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:63](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L63)

___

### scaleStage

▸ **scaleStage**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:67](https://github.com/ctinnovation/ngx-konva/blob/8f9d365/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L67)
