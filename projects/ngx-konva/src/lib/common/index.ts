
import { Shape, ShapeConfig } from "konva/lib/Shape";
import { Arc, ArcConfig } from "konva/lib/shapes/Arc";
import { Arrow, ArrowConfig } from "konva/lib/shapes/Arrow";
import { Circle, CircleConfig } from "konva/lib/shapes/Circle";
import { Ellipse, EllipseConfig } from "konva/lib/shapes/Ellipse";
import { Line, LineConfig } from "konva/lib/shapes/Line";
import { Path, PathConfig } from "konva/lib/shapes/Path";
import { Rect, RectConfig } from "konva/lib/shapes/Rect";
import { RegularPolygon, RegularPolygonConfig } from "konva/lib/shapes/RegularPolygon";
import { Ring, RingConfig } from "konva/lib/shapes/Ring";
import { Star, StarConfig } from "konva/lib/shapes/Star";
import { Text, TextConfig } from "konva/lib/shapes/Text";
import { TextPath, TextPathConfig } from "konva/lib/shapes/TextPath";
import { Wedge, WedgeConfig } from "konva/lib/shapes/Wedge";

export type KoShapeConfig = (RectConfig | CircleConfig | LineConfig | TextConfig | RegularPolygonConfig | PathConfig | ArrowConfig | ArcConfig | StarConfig | RingConfig | ShapeConfig | TextPathConfig | EllipseConfig | WedgeConfig) & { _skipTransition?: boolean };
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
