import { Component, OnDestroy, OnInit } from "@angular/core";
import { Layer } from "konva/lib/Layer";
import { Circle } from "konva/lib/shapes/Circle";
import { Line } from "konva/lib/shapes/Line";
import { Rect } from "konva/lib/shapes/Rect";
import { RegularPolygon } from "konva/lib/shapes/RegularPolygon";
import { Text } from "konva/lib/shapes/Text";
import { v4 } from "uuid";

export type ShapeNames = 'circle' | 'rect' | 'line' | 'text' | 'regular-polygon';
export type ShapeSelectors = `ko-${ShapeNames}`;
export type ShapeType = typeof Circle | typeof Rect | typeof Line | typeof Text | typeof RegularPolygon;
export type Shape = InstanceType<ShapeType>;
export const shapeTypesMap: { [key in ShapeSelectors]: ShapeType } = {
  'ko-circle': Circle,
  'ko-rect': Rect,
  'ko-line': Line,
  'ko-text': Text,
  'ko-regular-polygon': RegularPolygon
}

@Component({ template: '' })
export class KoNestable implements OnInit, OnDestroy {
  id: string = v4();

  getKoItem(): Layer | Shape {
    throw new Error('Unimplemented!')
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.getKoItem().destroy();
  }
}