import { Component, OnDestroy, OnInit } from "@angular/core";
import { Group } from "konva/lib/Group";
import { Layer } from "konva/lib/Layer";
import { Label } from "konva/lib/shapes/Label";
import { v4 } from "uuid";
import { KoShape } from ".";

export type KoNestableNode = Group | Layer | KoShape | Label;

@Component({ template: '' })
export class KoNestable implements OnInit, OnDestroy {
  id: string = v4();

  getKoItem(): KoNestableNode {
    throw new Error('Unimplemented!')
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.getKoItem().destroy();
  }
}
