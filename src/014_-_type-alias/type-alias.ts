type Age = number;

type Person = {
  name: string;
  age: Age;
  wage: number;
  likeColor?: string;
};

type ColorRGB = "RED" | "GREEN" | "BLUE";
type ColorCMYK = "CYAN" | "MAGENTA" | "YELLOW" | "KEY";
type Color = ColorRGB | ColorCMYK;

const person: Person = {
  name: "Sherlott",
  age: 27,
  wage: 5_000,
};

function setLikeColor(person: Person, color: Color): Person {
  return { ...person, likeColor: color };
}

console.log(setLikeColor(person, "BLUE"));
