type Flatten<T extends any[]> =
  T extends []
  ? []
  : T extends [infer F, ...infer Rest]
  ? F extends any[] ? Flatten<[...Flatten<F>, ...Rest]> : [F, ...Flatten<Rest>]
  : never