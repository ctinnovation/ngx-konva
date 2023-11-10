[ngx-konva](README.md) / Exports

# ngx-konva

## Table of contents

### Classes

- [KoDragDirective](classes/KoDragDirective.md)
- [KoGroupComponent](classes/KoGroupComponent.md)
- [KoHoverDirective](classes/KoHoverDirective.md)
- [KoImageComponent](classes/KoImageComponent.md)
- [KoLabelComponent](classes/KoLabelComponent.md)
- [KoLayerComponent](classes/KoLayerComponent.md)
- [KoMouseDirective](classes/KoMouseDirective.md)
- [KoNestable](classes/KoNestable.md)
- [KoPointerDirective](classes/KoPointerDirective.md)
- [KoShapeComponent](classes/KoShapeComponent.md)
- [KoStageAutoScaleComponent](classes/KoStageAutoScaleComponent.md)
- [KoStageComponent](classes/KoStageComponent.md)
- [KoTransformDirective](classes/KoTransformDirective.md)
- [NgxKonvaModule](classes/NgxKonvaModule.md)

### Type Aliases

- [KoImageConfig](modules.md#koimageconfig)
- [KoNestableConfig](modules.md#konestableconfig)
- [KoNestableNode](modules.md#konestablenode)
- [KoShape](modules.md#koshape)
- [KoShapeConfig](modules.md#koshapeconfig)
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

[projects/ngx-konva/src/lib/components/ko-image.component.ts:8](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-image.component.ts#L8)

___

### KoNestableConfig

Ƭ **KoNestableConfig**: [`KoShapeConfig`](modules.md#koshapeconfig) \| `GroupConfig` \| `LayerConfig` \| `LabelConfig` & { `_skipTransition?`: `boolean`  }

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:11](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L11)

___

### KoNestableNode

Ƭ **KoNestableNode**: `Group` \| `Layer` \| [`KoShape`](modules.md#koshape) \| `Label`

#### Defined in

[projects/ngx-konva/src/lib/common/ko-nestable.ts:10](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/ko-nestable.ts#L10)

___

### KoShape

Ƭ **KoShape**: `InstanceType`<[`KoShapeType`](modules.md#koshapetype)\>

#### Defined in

[projects/ngx-konva/src/lib/common/index.ts:21](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/index.ts#L21)

___

### KoShapeConfig

Ƭ **KoShapeConfig**: `RectConfig` \| `CircleConfig` \| `LineConfig` \| `TextConfig` \| `RegularPolygonConfig` \| `PathConfig` \| `ArrowConfig` \| `ArcConfig` \| `StarConfig` \| `RingConfig` \| `ShapeConfig` \| `TextPathConfig` \| `EllipseConfig` \| `WedgeConfig` & { `_skipTransition?`: `boolean`  }

#### Defined in

[projects/ngx-konva/src/lib/common/index.ts:17](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/index.ts#L17)

___

### KoShapeNames

Ƭ **KoShapeNames**: ``"circle"`` \| ``"rect"`` \| ``"line"`` \| ``"text"`` \| ``"regular-polygon"`` \| ``"path"`` \| ``"arrow"`` \| ``"arc"`` \| ``"star"`` \| ``"ring"`` \| ``"shape"`` \| ``"text-path"`` \| ``"ellipse"`` \| ``"wedge"``

#### Defined in

[projects/ngx-konva/src/lib/common/index.ts:18](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/index.ts#L18)

___

### KoShapeSelectors

Ƭ **KoShapeSelectors**: \`ko-${KoShapeNames}\`

#### Defined in

[projects/ngx-konva/src/lib/common/index.ts:19](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/index.ts#L19)

___

### KoShapeType

Ƭ **KoShapeType**: typeof `Circle` \| typeof `Rect` \| typeof `Line` \| typeof `Text` \| typeof `RegularPolygon` \| typeof `Path` \| typeof `Arrow` \| typeof `Arc` \| typeof `Star` \| typeof `Ring` \| typeof `Shape` \| typeof `TextPath` \| typeof `Ellipse` \| typeof `Wedge`

#### Defined in

[projects/ngx-konva/src/lib/common/index.ts:20](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/index.ts#L20)

___

### StageConfigOptionalContainer

Ƭ **StageConfigOptionalContainer**: `Omit`<`StageConfig`, ``"container"``\> & `Partial`<`Pick`<`StageConfig`, ``"container"``\>\>

#### Defined in

[projects/ngx-konva/src/lib/components/ko-stage.component.ts:6](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/components/ko-stage.component.ts#L6)

## Variables

### koShapeTypesMap

• `Const` **koShapeTypesMap**: { [key in KoShapeSelectors]: KoShapeType \| Shape }

#### Defined in

[projects/ngx-konva/src/lib/common/index.ts:22](https://github.com/giovanni-bertoncelli/ngx-konva/blob/69b9287/projects/ngx-konva/src/lib/common/index.ts#L22)
