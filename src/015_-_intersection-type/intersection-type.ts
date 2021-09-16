type HaveName = { name: string };
type HaveLastName = { lastName: string };
type HavaAge = { age: number };

type Person = HaveName | HaveLastName | HavaAge;
type PersonAll = HaveName & HaveLastName & HavaAge;

type AB = "A" | "B";
type AC = "A" | "C";
type Intersecao = AB & AC;

const person1: Person = {
  age: 27,
  name: "Sherlott",
  lastName: "Da Silva",
};

const person2: Person = {
  name: "Sherlott",
};

const person3: PersonAll = {
  age: 27,
  name: "Sherlott",
  lastName: "Da Silva",
};

console.log(person1);
console.log(person2);
console.log(person3);
