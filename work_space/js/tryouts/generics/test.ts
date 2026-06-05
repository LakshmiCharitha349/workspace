import { applyTwice, compose, constantly, flip, juxt, pairWith, tap, on, zipWith, prop, wrap, fork } from "./compose.ts";

const increment = (x: number) => x + 1;
const isEven = (x: number): boolean => x % 2 === 0;
const repeat = (x: number, y: string) => y.repeat(x);
const len = (x: string) => x.length;
const not = (x: boolean) => !x;
const toUpper = (x: string) => x.toUpperCase();
const firstChar = (x: string) => x[0];
const toStr = (x: number) => x.toString();

const addTwo = compose(increment, increment);
const isOneAboveEven = compose(isEven, increment);
const isMaxEven = compose(isEven, Math.max);
const isMaxOdd = compose(not, isMaxEven);
const isRepeatedEven = compose(isEven, compose(len, repeat));
const shoutLength = compose(len, toUpper);
const firstCharIsEvenLength = compose(isEven, compose(len, firstChar));
const stringifiedIncrement = compose(toStr, increment);


const bothMath = juxt(increment, increment);
const mathPair = juxt(increment, (x: number) => x * 2);
const evenAndOdd = juxt(isEven, compose(not, isEven));
const maxAndMin = juxt(Math.max, Math.min);
const lengthAndFirst = juxt(len, firstChar);

const twiceInc = applyTwice(increment, 5);
const twiceNot = applyTwice(not, true);

const flippedRepeat = flip(repeat);
const flippedMax = flip(Math.max);

const alwaysFive = constantly(5);
const alwaysHello = constantly("hello");

const sumLengths = on((a, b) => a + b, len);
const compareLengths = on((a, b) => a > b, len);


const pairInc = pairWith(increment);
const pairLen = pairWith(len);


const tappedInc = tap(increment);
const tappedLog = tap(console.log);

const summed = zipWith((a, b) => a + b, [1, 2], [3, 4]);
const zippedStrings = zipWith((a, b) => a + b, ["a"], ["b"]);

// prop tests
const getName = prop("name");
const getAge = prop("age");

// wrap tests
const wrappedInc = wrap(increment);
const wrappedLen = wrap(len);

// fork tests
const sumAndMultiply = fork(
  (a, b) => a + b,
  (x: number) => x + 1,
  (x: number) => x * 2
);

const evenAfterOps = fork(
  (a, b) => a && b,
  isEven,
  compose(isEven, increment)
);

