// type Chainable = {
//   option(key: string, value: any): any
//   get(): any
// }

type Chainable<T = {}> = {
  option<Key extends string, Value> (
    key: Key extends keyof T ? never : Key,
    value: Value,
  ): Chainable<T & Record<Key, Value>>
  get (): T
}