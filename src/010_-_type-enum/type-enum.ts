enum Color {
  RED, //0
  BLUE, //1
  YELLOW, //2
  VIOLET, //3
  PINK, //4
  GREEN, //5
}

//console.log(Color);

console.log(Color.RED);
console.log(Color[0]);
console.log(Color.VIOLET);

function SelectCores(color: Color): void {
  console.log(Color[color]);
}

SelectCores(1);
