import { Component, OnDestroy, OnInit } from "@angular/core";
import { Layer } from "konva/lib/Layer";
import { v4 } from "uuid";
import { KoShape } from ".";

@Component({ template: '' })
export class KoNestable implements OnInit, OnDestroy {
  id: string = v4();

  getKoItem(): Layer | KoShape {
    throw new Error('Unimplemented!')
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.getKoItem().destroy();
  }
}