class Point {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log(`Draw the point x: ${this.x}, y:${this.y}`);
  }
}

const point = new Point();
point.x = 900;
point.y = 200;
point.draw();
