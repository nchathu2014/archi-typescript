var MyPointAgain = /** @class */ (function () {
    function MyPointAgain(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(MyPointAgain.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (val) {
            if (val < 0)
                throw new Error("x cannot be nagative");
            this._x = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyPointAgain.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (val) {
            if (val < 0)
                throw new Error("y cannot be nagative");
            this._y = val;
        },
        enumerable: false,
        configurable: true
    });
    MyPointAgain.prototype.draw = function () {
        console.log("Draw the point x: ".concat(this.x, ", y:").concat(this.y));
    };
    return MyPointAgain;
}());
var p = new MyPointAgain();
p.x = 100;
p.y = 200;
console.log("x=".concat(p.x, ", y=").concat(p.y));
p.draw();
