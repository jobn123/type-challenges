type Last<T extends any[]> = T extends [...unknown[], infer last] ? last : never

type Last1<T extends any[]> = T extends [infer First, ...infer Rest]
  ? Rest["length"] extends 1 ? Rest[0] : Last<Rest>
  : never