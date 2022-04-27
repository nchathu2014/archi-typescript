class MyPointAgain {
  constructor(private _x?: number, private _y?: number) {}

  get x() {
    return this._x;
  }

  set x(val) {
    if (<number>val < 0) throw new Error("x cannot be nagative");
    this._x = val;
  }

  get y() {
    return this._y;
  }

  set y(val) {
    if (<number>val < 0) throw new Error("y cannot be nagative");
    this._y = val;
  }

  draw() {
    console.log(`Draw the point x: ${this.x}, y:${this.y}`);
  }
}

const p = new MyPointAgain();
p.x = 100;
p.y = 200;

console.log(`x=${p.x}, y=${p.y}`);
p.draw();
