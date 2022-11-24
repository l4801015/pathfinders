export type vector = {
  x: number;
  y: number;
};

class Vector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(v: vector) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  sub(v: vector) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  mul(n: number) {
    this.x *= n;
    this.y *= n;
    return this;
  }

  div(n: number) {
    this.x /= n;
    this.y /= n;
    return this;
  }

  isEqual(v: vector) {
    if (this.x == v.x && this.y == v.y) {
      return true;
    } else {
      return false;
    }
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  clone = function () {
    return new Vector(this.x, this.y);
  };
}

export default Vector;
