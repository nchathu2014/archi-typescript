var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("Draw the point x: ".concat(this.x, ", y:").concat(this.y));
    };
    return Point;
}());
var point = new Point();
point.x = 100;
point.y = 200;
point.draw();
