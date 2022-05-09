type ReplaceKeys<U extends Record<string, unknown>, T extends string, Y extends Record<string, unknown>> = {
  [k in keyof U]: k extends T ? k extends keyof Y ? Y[k] : never : U[k]
}