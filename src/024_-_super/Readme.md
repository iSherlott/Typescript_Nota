# Super

<p>É possível criar um tipo de filtro antes da execução da função da função da classe super. com a chamada <b>super</b>, como no exemplo abaixo.</p>
```
export class Student extends Person {
  getFullName(): string {
    console.log(`Running before.`);
    return super.getFullName();
  }
}
```

<p>Também é possível guardar o conteúdo de retorno em uma variavél e editar ela como no exemplo abaixo.</p>
```
export class Client extends Person {
  getFullName(): string {
    console.log(`Running before.`);
    const result = super.getFullName();
    return "Client: " + result;
  }
}
```

<p>Na declaração de uma nova classe herdando tudo da classe pai, porém, acrescentando um novo parametro, você pode efetuar desde que, faça a chamada de todo o conteúdo e somente o novo conteúdo mantenha na estrutura do constructor (o restante será passado como parametro de uma função <b>super</b>, como pode observar abaixo.</p>
```
export class Student extends Person {
  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public classroom: string
  ) {
    super(name, lastName, age, cpf);
  ...
```
