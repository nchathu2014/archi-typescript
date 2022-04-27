var PointAgain = /** @class */ (function () {
    function PointAgain(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    PointAgain.prototype.draw = function () {
        console.log("Draw the point x: ".concat(this.x, ", y:").concat(this.y));
    };
    return PointAgain;
}());
var mypoint = new PointAgain();
mypoint.draw();
