[ngx-konva](README.md) / Exports

# ngx-konva

## Table of contents

### Classes

- [KoGroupComponent](classes/KoGroupComponent.md)
- [KoHoverDirective](classes/KoHoverDirective.md)
- [KoImageComponent](classes/KoImageComponent.md)
- [KoLabelComponent](classes/KoLabelComponent.md)
- [KoLayerComponent](classes/KoLayerComponent.md)
- [KoPointerDirective](classes/KoPointerDirective.md)
- [KoShapeComponent](classes/KoShapeComponent.md)
- [KoStageAutoScaleComponent](classes/KoStageAutoScaleComponent.md)
- [KoStageComponent](classes/KoStageComponent.md)
- [KoTransitionDirective](classes/KoTransitionDirective.md)
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

[lib/components/ko-image.component.ts:6](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/components/ko-image.component.ts#L6)

___

### KoShape

Ƭ **KoShape**: `InstanceType`<[`KoShapeType`](modules.md#koshapetype)\>

#### Defined in

[lib/common/index.ts:21](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/common/index.ts#L21)

___

### KoShapeNames

Ƭ **KoShapeNames**: ``"circle"`` \| ``"rect"`` \| ``"line"`` \| ``"text"`` \| ``"regular-polygon"`` \| ``"path"`` \| ``"arrow"`` \| ``"arc"`` \| ``"star"`` \| ``"ring"`` \| ``"shape"`` \| ``"text-path"`` \| ``"ellipse"`` \| ``"wedge"``

#### Defined in

[lib/common/index.ts:18](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/common/index.ts#L18)

___

### KoShapeSelectors

Ƭ **KoShapeSelectors**: \`ko-${KoShapeNames}\`

#### Defined in

[lib/common/index.ts:19](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/common/index.ts#L19)

___

### KoShapeType

Ƭ **KoShapeType**: typeof `Circle` \| typeof `Rect` \| typeof `Line` \| typeof `Text` \| typeof `RegularPolygon` \| typeof `Path` \| typeof `Arrow` \| typeof `Arc` \| typeof `Star` \| typeof `Ring` \| typeof `Shape` \| typeof `TextPath` \| typeof `Ellipse` \| typeof `Wedge`

#### Defined in

[lib/common/index.ts:20](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/common/index.ts#L20)

___

### StageConfigOptionalContainer

Ƭ **StageConfigOptionalContainer**: `Omit`<`StageConfig`, ``"container"``\> & `Partial`<`Pick`<`StageConfig`, ``"container"``\>\>

#### Defined in

[lib/components/ko-stage.component.ts:7](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L7)

## Variables

### koShapeTypesMap

• `Const` **koShapeTypesMap**: { [key in KoShapeSelectors]: KoShapeType \| Shape }

#### Defined in

[lib/common/index.ts:22](https://github.com/giovanni-bertoncelli/ngx-konva/blob/3e23c8a/projects/ngx-konva/src/lib/common/index.ts#L22)
