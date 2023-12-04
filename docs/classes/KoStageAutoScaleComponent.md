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

• **new KoStageAutoScaleComponent**(`parentContainer`, `cdRef`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentContainer` | `ElementRef`<`HTMLDivElement`\> |
| `cdRef` | `ChangeDetectorRef` |

#### Overrides

[KoStageComponent](KoStageComponent.md).[constructor](KoStageComponent.md#constructor)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:20](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L20)

## Properties

### afterUpdate

• **afterUpdate**: `EventEmitter`<`Stage`\>

#### Inherited from

[KoStageComponent](KoStageComponent.md).[afterUpdate](KoStageComponent.md#afterupdate)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:21](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L21)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<`Stage`\>

#### Inherited from

[KoStageComponent](KoStageComponent.md).[beforeUpdate](KoStageComponent.md#beforeupdate)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:18](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L18)

___

### cdRef

• `Private` **cdRef**: `ChangeDetectorRef`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:22](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L22)

___

### container

• **container**: `ElementRef`<`any`\>

#### Inherited from

[KoStageComponent](KoStageComponent.md).[container](KoStageComponent.md#container)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:14](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L14)

___

### initDimensions

• **initDimensions**: `EventEmitter`<{ `height`: `number` ; `width`: `number`  }\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:18](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L18)

___

### initialDimensions

• `Private` **initialDimensions**: ``null`` \| { `height`: `number` ; `width`: `number`  } = `null`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:14](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L14)

___

### onNewLayer

• **onNewLayer**: `EventEmitter`<`Layer`\>

#### Inherited from

[KoStageComponent](KoStageComponent.md).[onNewLayer](KoStageComponent.md#onnewlayer)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:24](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L24)

___

### parentContainer

• `Private` **parentContainer**: `ElementRef`<`HTMLDivElement`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:21](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L21)

___

### resizeObserver

• `Private` **resizeObserver**: `ResizeObserver`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:15](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L15)

___

### stage

• **stage**: `Stage`

#### Inherited from

[KoStageComponent](KoStageComponent.md).[stage](KoStageComponent.md#stage)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:15](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L15)

## Accessors

### config

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

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:29](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L29)

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

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:61](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L61)

___

### ngAfterContentInit

▸ **ngAfterContentInit**(): `void`

#### Returns

`void`

#### Implementation of

AfterContentInit.ngAfterContentInit

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:44](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L44)

___

### ngAfterViewInit

▸ **ngAfterViewInit**(): `void`

#### Returns

`void`

#### Inherited from

[KoStageComponent](KoStageComponent.md).[ngAfterViewInit](KoStageComponent.md#ngafterviewinit)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:53](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L53)

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

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:48](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L48)

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

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:40](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L40)

___

### onResize

▸ `Private` **onResize**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:53](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L53)

___

### scaleStage

▸ `Private` **scaleStage**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:57](https://github.com/ctinnovation/ngx-konva/blob/0caea8a/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L57)
