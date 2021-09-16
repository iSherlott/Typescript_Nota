// Array<T> - T[]

function multArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

function concatString(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

console.log(multArgs(1, 2, 3));
console.log(concatString("Sherlott", " Da Silva"));
console.log(toUpperCase("a", "b", "c"));

const array1: readonly string[] = ["Sherlott", "Da Silva"];
const array2: ReadonlyArray<string> = ["Sherlott", "Da Silva"];

console.log(array1);
console.log(array2);
