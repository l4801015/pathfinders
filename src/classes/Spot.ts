import type vector from './Vector';
import Vector from "./Vector";

import { ctx } from '../canvas';
import space from "../space";

class Spot {
  public h: number = 0;
  public g: number = 0;
  public f: number = 0;
  public pos: vector;
  public ctx: CanvasRenderingContext2D;
  public size: number;
  public color: string;

  constructor(size: number, vector: vector) {
    this.pos = this.pickLocation(vector.x, vector.y);
    this.size = size;
    //this.color = color;
    this.ctx = ctx;
  }

  show(color: string) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.pos.x, this.pos.y, space.scale, space.scale);
  }

  update = function (x: number, y: number) {
    //this.pos = this.pickLocation(x, y);
    this.pos = new Vector(x, y)
  };

  pickLocation(x: number, y: number) {
    const newPos = new Vector(x, y);
    newPos.mul(space.scale);
    return newPos;
  }
}

export default Spot;
