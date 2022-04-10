type MyOmit<T, K extends keyof T> = {
  [U in Exclude<keyof T, K>]: T[U]
}

// type MyOmit<T extends object, K extends keyof T> = {
//   [Key in keyof T as Key extends K ? never : Key]: T[Key];
// };