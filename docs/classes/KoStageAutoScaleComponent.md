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
- [children](KoStageAutoScaleComponent.md#children)
- [container](KoStageAutoScaleComponent.md#container)
- [initialDimensions](KoStageAutoScaleComponent.md#initialdimensions)
- [onNewLayer](KoStageAutoScaleComponent.md#onnewlayer)
- [parentContainer](KoStageAutoScaleComponent.md#parentcontainer)
- [resizeObserver](KoStageAutoScaleComponent.md#resizeobserver)
- [stage](KoStageAutoScaleComponent.md#stage)

### Accessors

- [config](KoStageAutoScaleComponent.md#config)

### Methods

- [ngAfterContentInit](KoStageAutoScaleComponent.md#ngaftercontentinit)
- [ngAfterViewInit](KoStageAutoScaleComponent.md#ngafterviewinit)
- [ngOnDestroy](KoStageAutoScaleComponent.md#ngondestroy)
- [ngOnInit](KoStageAutoScaleComponent.md#ngoninit)
- [onResize](KoStageAutoScaleComponent.md#onresize)
- [scaleStage](KoStageAutoScaleComponent.md#scalestage)

## Constructors

### constructor

• **new KoStageAutoScaleComponent**(`parentContainer`, `cdRef`, `container`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentContainer` | `ElementRef`<`HTMLDivElement`\> |
| `cdRef` | `ChangeDetectorRef` |
| `container` | `ElementRef`<`any`\> |

#### Overrides

[KoStageComponent](KoStageComponent.md).[constructor](KoStageComponent.md#constructor)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:15](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L15)

## Properties

### afterUpdate

• **afterUpdate**: `EventEmitter`<`Stage`\>

#### Inherited from

[KoStageComponent](KoStageComponent.md).[afterUpdate](KoStageComponent.md#afterupdate)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:26](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L26)

___

### beforeUpdate

• **beforeUpdate**: `EventEmitter`<`Stage`\>

#### Inherited from

[KoStageComponent](KoStageComponent.md).[beforeUpdate](KoStageComponent.md#beforeupdate)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:23](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L23)

___

### cdRef

• `Private` **cdRef**: `ChangeDetectorRef`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:17](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L17)

___

### children

• **children**: `QueryList`<[`KoNestable`](KoNestable.md)\>

#### Inherited from

[KoStageComponent](KoStageComponent.md).[children](KoStageComponent.md#children)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:18](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L18)

___

### container

• **container**: `ElementRef`<`any`\>

#### Inherited from

[KoStageComponent](KoStageComponent.md).[container](KoStageComponent.md#container)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:15](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L15)

___

### initialDimensions

• `Private` **initialDimensions**: ``null`` \| { `height`: `number` ; `width`: `number`  } = `null`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:12](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L12)

___

### onNewLayer

• **onNewLayer**: `EventEmitter`<`Layer`\>

#### Inherited from

[KoStageComponent](KoStageComponent.md).[onNewLayer](KoStageComponent.md#onnewlayer)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:29](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L29)

___

### parentContainer

• `Private` **parentContainer**: `ElementRef`<`HTMLDivElement`\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:16](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L16)

___

### resizeObserver

• `Private` **resizeObserver**: `ResizeObserver`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:13](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L13)

___

### stage

• **stage**: `Stage`

#### Inherited from

[KoStageComponent](KoStageComponent.md).[stage](KoStageComponent.md#stage)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:20](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L20)

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

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:34](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L34)

## Methods

### ngAfterContentInit

▸ **ngAfterContentInit**(): `void`

#### Returns

`void`

#### Implementation of

AfterContentInit.ngAfterContentInit

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:40](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L40)

___

### ngAfterViewInit

▸ **ngAfterViewInit**(): `void`

#### Returns

`void`

#### Inherited from

[KoStageComponent](KoStageComponent.md).[ngAfterViewInit](KoStageComponent.md#ngafterviewinit)

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:58](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L58)

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

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:44](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L44)

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

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:36](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L36)

___

### onResize

▸ `Private` **onResize**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:49](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L49)

___

### scaleStage

▸ `Private` **scaleStage**(): `void`

#### Returns

`void`

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts:53](https://github.com/giovanni-bertoncelli/ngx-konva/blob/d94ca4c/projects/ngx-konva/src/lib/components/ko-stage-autoscale.component.ts#L53)
