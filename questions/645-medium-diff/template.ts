// type Diff<O, O1> = { [key in keyof (O & O1) as key extends keyof (O | O1) ? never : key]: (O & O1)[key] }

type Diff<A, B> = {
  [K in (Exclude<keyof A, keyof B> | Exclude<keyof B, keyof A>)]: (A & B)[K]
}