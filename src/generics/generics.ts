function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numberArray = getArray<number>([1, 2, 3]);
let stringArray = getArray<string>(["A", "B", "C"]);

numberArray.push(1);
// numberArray.push("10");--> Error
