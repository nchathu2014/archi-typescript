class MyPoint {
  constructor(private x?: number, private y?: number) {}

  draw() {
    console.log(`Draw the point x: ${this.x}, y:${this.y}`);
  }
}

const mypoint1 = new MyPoint();
mypoint1.draw();
