type MyEqual<K extends unknown, U extends unknown> =
  (<T>() => T extends K ? 1 : 2) extends
  (<T>() => T extends U ? 1 : 2) ? true : false

type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? MyEqual<First, U> extends true
  ? true
  : Includes<Rest, U>
  : false