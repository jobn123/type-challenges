type LengthOfStringHelper<S extends string> =
  S extends ''
  ? []
  : S extends `${infer F}${infer Rest}`
  ? [F, ...LengthOfStringHelper<Rest>]
  : []

type LengthOfString<S extends string> = LengthOfStringHelper<S>['length']