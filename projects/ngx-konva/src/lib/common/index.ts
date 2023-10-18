
import { Shape } from "konva/lib/Shape";
import { Arc } from "konva/lib/shapes/Arc";
import { Arrow } from "konva/lib/shapes/Arrow";
import { Circle } from "konva/lib/shapes/Circle";
import { Ellipse } from "konva/lib/shapes/Ellipse";
import { Line } from "konva/lib/shapes/Line";
import { Path } from "konva/lib/shapes/Path";
import { Rect } from "konva/lib/shapes/Rect";
import { RegularPolygon } from "konva/lib/shapes/RegularPolygon";
import { Ring } from "konva/lib/shapes/Ring";
import { Star } from "konva/lib/shapes/Star";
import { Text } from "konva/lib/shapes/Text";
import { TextPath } from "konva/lib/shapes/TextPath";
import { Wedge } from "konva/lib/shapes/Wedge";


export type KoShapeNames = 'circle' | 'rect' | 'line' | 'text' | 'regular-polygon' | 'path' | 'arrow' | 'arc' | 'star' | 'ring' | 'shape' | 'text-path' | 'ellipse' | 'wedge';
export type KoShapeSelectors = `ko-${KoShapeNames}`;
export type KoShapeType = typeof Circle | typeof Rect | typeof Line | typeof Text | typeof RegularPolygon | typeof Path | typeof Arrow | typeof Arc | typeof Star | typeof Ring | typeof Shape | typeof TextPath | typeof Ellipse | typeof Wedge;
export type KoShape = InstanceType<KoShapeType>;
export const koShapeTypesMap: { [key in KoShapeSelectors]: KoShapeType | Shape } = {
  'ko-circle': Circle,
  'ko-rect': Rect,
  'ko-line': Line,
  'ko-text': Text,
  'ko-regular-polygon': RegularPolygon,
  'ko-path': Path,
  'ko-arrow': Arrow,
  'ko-arc': Arc,
  'ko-star': Star,
  'ko-ring': Ring,
  'ko-shape': Shape,
  'ko-text-path': TextPath,
  'ko-ellipse': Ellipse,
  'ko-wedge': Wedge
}
