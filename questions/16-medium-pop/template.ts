type Pop<T extends unknown[]> = T extends [...infer O, infer L] ? O : []

type Push<T extends unknown[], E> = [...T, E]

type Shift<T extends unknown[]> = T extends [infer F, ...infer O] ? O : []

type Unshift<T extends unknown[], E> = [E, ...T]