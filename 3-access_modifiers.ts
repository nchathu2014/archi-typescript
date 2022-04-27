class PointAgain {
  private x: number;
  private y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log(`Draw the point x: ${this.x}, y:${this.y}`);
  }
}

const mypoint = new PointAgain();
mypoint.draw();
