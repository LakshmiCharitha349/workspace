export const compose = <I, A>(f: ((args: A) => I), g: ((...args: any[]) => A)) =>
  (...args: any[]) => f(g(...args))

const juxt = <A, B, C extends any[]>(
  f: (...args: C) => B,
  g: (...args: C) => A) =>
  (...args: C): [B, A] =>
    [f(...args), g(...args)];

// export const juxt = <I extends unknown[], A, B>(
//   f: (...args: I) => A,
//   g: (...args: I) => B) =>
//   (...args: I) =>
//     [f(...args), g(...args.reverse())]

type Juxt = <A,B>(f:(...args:any)=> A,g:(...args:any)=>B) => (...args:any[]) => [B,A]
const juxt = (f,g) => (....args) => [f(...args),g(...args)]

export const applyTwice = <I, A>(f: (x: (A | I)) => I, x: A) => f(f(x));

export const flip = <A, B, I>(f: (b: B, a: A) => I) => (a: A, b: B) => f(b, a);

export const constantly = <A>(x: A) => () => x;

export const on = <A, B, X, I>(f: (arg1: X, arg2: X) => I, g: (x: A | B) => X) => (x: A, y: B) => f(g(x), g(y));

export const pairWith = <I, A>(f: (x: A) => I) => (x: A) => [x, f(x)];

export const tap = <A>(f: (x: A) => void) => (x: A) => {
  f(x);
  return x;
};

export const zipWith = <A, B, I>(f: (x: A, y: B) => I, a1: A[], a2: B[]) =>
  a1.map((x: A, i: number) => f(x, a2[i]));

export const prop = <I>(key: string) => (obj: { [key: string]: I }) => obj[key];

export const wrap = <A, I>(f: (x: A) => I) => (x: A) => {
  console.log(x);
  const result = f(x);
  console.log(result);
  return result;
};

export const fork = <A, X, Y, I>(combine: (x: X, y: Y) => I, f: (x: A) => X, g: (x: A) => Y) => (x: A) => combine(f(x), g(x));