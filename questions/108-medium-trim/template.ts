// type Char = ' ' | '\n' | '\t';

// type TrimLeftStr<S extends string> = S extends `${Char}${infer B}` ? TrimLeft<B> : S;
// type TrimRightStr<S extends string> = S extends `${infer B}${Char}` ? TrimRightStr<B> : S;

// type Trim<S extends string> = TrimRightStr<TrimLeftStr<S>>;

type Trim<S extends string> = S extends `${' ' | '\t' | '\n'}${infer R}` | `${infer R}${' ' | '\t' | '\n'}` ? Trim<R> : S