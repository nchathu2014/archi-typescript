var Like = /** @class */ (function () {
    function Like(_highlighted, _likes) {
        if (_highlighted === void 0) { _highlighted = false; }
        if (_likes === void 0) { _likes = 0; }
        this._highlighted = _highlighted;
        this._likes = _likes;
    }
    Like.prototype.buttonOnClick = function () {
        if (!this._highlighted)
            this._likes++;
        else
            this._likes--;
        this._highlighted = !this._highlighted;
    };
    Object.defineProperty(Like.prototype, "highlighted", {
        get: function () {
            return this._highlighted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        enumerable: false,
        configurable: true
    });
    return Like;
}());
var like = new Like(true, 10);
console.log("Highlight: ".concat(like.highlighted, ", Count:").concat(like.likes));
like.buttonOnClick();
console.log("Highlight: ".concat(like.highlighted, ", Count:").concat(like.likes));
like.buttonOnClick();
console.log("Highlight: ".concat(like.highlighted, ", Count:").concat(like.likes));
