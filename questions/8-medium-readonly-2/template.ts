type MyExclude<T, K> = T extends K ? never : T
type MyReadonly2<T, K extends keyof T = keyof T> = { readonly [R in K]: T[R] } & { [R in MyExclude<keyof T, K>]: T[R] }


// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [TKey in keyof T as TKey extends K ? TKey : never]: T[TKey]
// } & Omit<T, K>;
