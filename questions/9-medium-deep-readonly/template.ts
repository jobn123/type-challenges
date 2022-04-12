type DeepReadonly<T> = {
  readonly [k in keyof T]: T[k] extends Record<string, unknown> ? DeepReadonly<T[k]> : T[k]
}