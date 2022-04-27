var MyPoint = /** @class */ (function () {
    function MyPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    MyPoint.prototype.draw = function () {
        console.log("Draw the point x: ".concat(this.x, ", y:").concat(this.y));
    };
    return MyPoint;
}());
var mypoint1 = new MyPoint();
mypoint1.draw();
