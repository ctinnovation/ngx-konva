import { Component, OnDestroy, OnInit } from "@angular/core";
import { Group } from "konva/lib/Group";
import { Layer } from "konva/lib/Layer";
import { v4 } from "uuid";
import { KoShape } from ".";

@Component({ template: '' })
export class KoNestable implements OnInit, OnDestroy {
  id: string = v4();

  getKoItem(): Layer | KoShape | Group {
    throw new Error('Unimplemented!')
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.getKoItem().destroy();
  }
}