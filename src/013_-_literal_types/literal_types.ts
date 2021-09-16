let x = 10;
x = 0b1010;

const y = 10;

let z = 100 as const;

const person = {
  name: "Sherlott" as const,
  lastName: "Da Silva",
};

function selectColor(color: "RED" | "YELLOW" | "BLUE"): string {
  return color;
}

console.log(selectColor("YELLOW"));
