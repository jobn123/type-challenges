// type TupleToUnion<T extends unknown[]> = 
// type TupleToUnion<T extends unknown[]> = T[number]

// type TupleToUnion<T extends any[]> = keyof {
//   [P in T[number]]: P
// }

type TupleToUnion<T extends any[]> = T extends [infer I, ...infer R] ? I | TupleToUnion<[...R]> : never