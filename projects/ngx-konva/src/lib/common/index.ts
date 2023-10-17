
import { Circle } from "konva/lib/shapes/Circle";
import { Line } from "konva/lib/shapes/Line";
import { Rect } from "konva/lib/shapes/Rect";
import { RegularPolygon } from "konva/lib/shapes/RegularPolygon";
import { Text } from "konva/lib/shapes/Text";


export type KoShapeNames = 'circle' | 'rect' | 'line' | 'text' | 'regular-polygon';
export type KoShapeSelectors = `ko-${KoShapeNames}`;
export type KoShapeType = typeof Circle | typeof Rect | typeof Line | typeof Text | typeof RegularPolygon;
export type KoShape = InstanceType<KoShapeType>;
export const koShapeTypesMap: { [key in KoShapeSelectors]: KoShapeType } = {
  'ko-circle': Circle,
  'ko-rect': Rect,
  'ko-line': Line,
  'ko-text': Text,
  'ko-regular-polygon': RegularPolygon
}
