import space from './space';
import Vector from './Vector';

type vector = {
  x: number;
  y: number;
};

class Spot {
  pos: vector;
  ctx: CanvasRenderingContext2D;
  size: number;

  constructor(size: number) {
    this.pos = this.pickLocation();
    this.size = size;
  }

  show(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.pos.x, this.pos.y, space.scale, space.scale);
  }

  update = function () {
    this.pos = this.pickLocation();
  };

  pickLocation() {
    const newPos = new Vector(0, 0);
    newPos.mul(space.scale);
    return newPos;
  }
}

export default Spot;
