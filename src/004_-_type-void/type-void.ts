function semRetorno(...args: string[]): void {
  console.log(args.join(" "));
}

const pessoa = {
  nome: "Sherlott",
  sobrenome: "Da Silva",

  exibirNome(): void {
    console.log(this.nome + " " + this.sobrenome);
  },
};

semRetorno("Sherlott", "Da Silva");
pessoa.exibirNome();
