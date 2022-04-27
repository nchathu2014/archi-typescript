class Like {
  constructor(
    private _highlighted: boolean = false,
    private _likes: number = 0
  ) {}

  buttonOnClick() {
    !this._highlighted ? this._likes++ : this._likes--;
    this._highlighted = !this._highlighted;
  }

  get highlighted() {
    return this._highlighted;
  }

  get likes() {
    return this._likes;
  }
}

const like = new Like(true, 10);
console.log(`Highlight: ${like.highlighted}, Count:${like.likes}`);
like.buttonOnClick();
console.log(`Highlight: ${like.highlighted}, Count:${like.likes}`);
like.buttonOnClick();
console.log(`Highlight: ${like.highlighted}, Count:${like.likes}`);
