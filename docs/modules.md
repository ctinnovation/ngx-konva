[ngx-konva](README.md) / Exports

# ngx-konva

## Table of contents

### Classes

- [KoGroupComponent](classes/KoGroupComponent.md)
- [KoHoverDirective](classes/KoHoverDirective.md)
- [KoImageComponent](classes/KoImageComponent.md)
- [KoLayerComponent](classes/KoLayerComponent.md)
- [KoPointerDirective](classes/KoPointerDirective.md)
- [KoShapeComponent](classes/KoShapeComponent.md)
- [KoStageAutoScaleComponent](classes/KoStageAutoScaleComponent.md)
- [KoStageComponent](classes/KoStageComponent.md)
- [NgxKonvaModule](classes/NgxKonvaModule.md)

### Type Aliases

- [KoImageConfig](modules.md#koimageconfig)
- [KoShape](modules.md#koshape)
- [KoShapeNames](modules.md#koshapenames)
- [KoShapeSelectors](modules.md#koshapeselectors)
- [KoShapeType](modules.md#koshapetype)
- [StageConfigOptionalContainer](modules.md#stageconfigoptionalcontainer)

### Variables

- [koShapeTypesMap](modules.md#koshapetypesmap)

## Type Aliases

### KoImageConfig

Ƭ **KoImageConfig**: `Omit`<`ImageConfig`, ``"image"``\>

#### Defined in

lib/components/ko-image.component.ts:6

___

### KoShape

Ƭ **KoShape**: `InstanceType`<[`KoShapeType`](modules.md#koshapetype)\>

#### Defined in

[lib/common/index.ts:12](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/common/index.ts#L12)

___

### KoShapeNames

Ƭ **KoShapeNames**: ``"circle"`` \| ``"rect"`` \| ``"line"`` \| ``"text"`` \| ``"regular-polygon"``

#### Defined in

[lib/common/index.ts:9](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/common/index.ts#L9)

___

### KoShapeSelectors

Ƭ **KoShapeSelectors**: \`ko-${KoShapeNames}\`

#### Defined in

[lib/common/index.ts:10](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/common/index.ts#L10)

___

### KoShapeType

Ƭ **KoShapeType**: typeof `Circle` \| typeof `Rect` \| typeof `Line` \| typeof `Text` \| typeof `RegularPolygon`

#### Defined in

[lib/common/index.ts:11](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/common/index.ts#L11)

___

### StageConfigOptionalContainer

Ƭ **StageConfigOptionalContainer**: `Omit`<`StageConfig`, ``"container"``\> & `Partial`<`Pick`<`StageConfig`, ``"container"``\>\>

#### Defined in

[lib/components/ko-stage.component.ts:7](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L7)

## Variables

### koShapeTypesMap

• `Const` **koShapeTypesMap**: { [key in KoShapeSelectors]: KoShapeType }

#### Defined in

[lib/common/index.ts:13](https://github.com/giovanni-bertoncelli/ngx-konva/blob/106a15d/projects/ngx-konva/src/lib/common/index.ts#L13)
