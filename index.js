class Car {
  constructor(model, color, age) {
    this.model = model;
    this.color = color;
    this.age = age;
  }

  describe() {
    return `Model:${this.model}, Color: ${this.color} and Age: ${this.age}`;
  }
}

const c = new Car("M1", "RED", 12);
console.log(c.describe());
