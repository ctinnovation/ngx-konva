[ngx-konva](README.md) / Exports

# ngx-konva

## Table of contents

### Classes

- [KoHoverDirective](classes/KoHoverDirective.md)
- [KoLayerComponent](classes/KoLayerComponent.md)
- [KoShapeComponent](classes/KoShapeComponent.md)
- [KoStageAutoScaleComponent](classes/KoStageAutoScaleComponent.md)
- [KoStageComponent](classes/KoStageComponent.md)
- [NgxKonvaModule](classes/NgxKonvaModule.md)

### Type Aliases

- [KoShape](modules.md#koshape)
- [KoShapeNames](modules.md#koshapenames)
- [KoShapeSelectors](modules.md#koshapeselectors)
- [KoShapeType](modules.md#koshapetype)
- [StageConfigOptionalContainer](modules.md#stageconfigoptionalcontainer)

### Variables

- [koShapeTypesMap](modules.md#koshapetypesmap)

## Type Aliases

### KoShape

Ƭ **KoShape**: `InstanceType`<[`KoShapeType`](modules.md#koshapetype)\>

#### Defined in

lib/common.ts:12

___

### KoShapeNames

Ƭ **KoShapeNames**: ``"circle"`` \| ``"rect"`` \| ``"line"`` \| ``"text"`` \| ``"regular-polygon"``

#### Defined in

lib/common.ts:9

___

### KoShapeSelectors

Ƭ **KoShapeSelectors**: \`ko-${KoShapeNames}\`

#### Defined in

lib/common.ts:10

___

### KoShapeType

Ƭ **KoShapeType**: typeof `Circle` \| typeof `Rect` \| typeof `Line` \| typeof `Text` \| typeof `RegularPolygon`

#### Defined in

lib/common.ts:11

___

### StageConfigOptionalContainer

Ƭ **StageConfigOptionalContainer**: `Omit`<`StageConfig`, ``"container"``\> & `Partial`<`Pick`<`StageConfig`, ``"container"``\>\>

#### Defined in

[lib/ko-stage.component.ts:7](https://github.com/giovanni-bertoncelli/ngx-konva/blob/6698cbb/projects/ngx-konva/src/lib/ko-stage.component.ts#L7)

## Variables

### koShapeTypesMap

• `Const` **koShapeTypesMap**: { [key in KoShapeSelectors]: KoShapeType }

#### Defined in

lib/common.ts:13
