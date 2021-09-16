let x;
if (typeof x === "undefined") x = 20;
console.log(x * 2);

function createPerson(
  firstName: string,
  lastName?: string
): { firstName: string; lastName?: string } {
  return { firstName, lastName };
}

console.log(createPerson("Sherlott"));

function squareOf(x: any) {
  if (typeof x === "number") return x * x;
  else null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf("2");

if (squareOfTwoNumber === null) console.log(`Value SquareOfTwoNumber null`);
else console.log(squareOfTwoNumber);

if (squareOfTwoString === null) console.log(`Value SquareOfTwoString null`);
else console.log(squareOfTwoString);
