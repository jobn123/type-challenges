type First<T extends any[]> = T extends [] ? never : T[0]

// infer 提取
type GetFirst<T extends any[]> = T extends [infer first, ...unknown[]] ? first : never
