function funcao(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}

funcao.call(new Date(), "Sherlott", 27);
funcao.apply(new Date(), ["Sherlott", 27]);
