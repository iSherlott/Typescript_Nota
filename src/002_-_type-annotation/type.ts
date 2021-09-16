// Tipos Básicos
let nome: string = "Sherlott"; // Qualquer tipo de strings: '' "" ``
let idade: number = 27; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol("Qualquer-Symbol"); // symbol
let big: bigint = 10n; //bigint

// Arrays
let arrayDeString: Array<string> = ["1", "2", "3"];
let arrayDeString2: string[] = ["1", "2", "3"];
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];

// Objetos
let objPessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: "Sherlott",
  idade: 27,
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => 2 + 2;
