type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P;
};

// T[number] number相当于数组下标 0, 1, 2