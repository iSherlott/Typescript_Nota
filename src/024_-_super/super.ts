export class Person {
  name: string;
  lastName: string;
  private age: number;
  protected cpf: string;

  constructor(name: string, lastName: string, age: number, cpf: string) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.cpf = cpf;
  }

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return "FullName: " + this.name + " " + this.lastName;
  }
}

export class Student extends Person {
  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public classroom: string
  ) {
    super(name, lastName, age, cpf);
  }

  getFullName(): string {
    console.log(`Running before.`);
    return super.getFullName();
  }
}

export class Client extends Person {
  getFullName(): string {
    console.log(`Running before.`);
    const result = super.getFullName();
    return "Client: " + result;
  }
}

const person = new Person("Sherlott", "Da Silva", 27, "408.680.148.40");
const student = new Student(
  "Sherlott",
  "Da Silva",
  27,
  "408.680.148.40",
  "Sala B"
);
const client = new Client("Sherlott", "Da Silva", 27, "408.680.148.40");

console.log(person.getFullName());
console.log(student.getFullName());
console.log(client.getFullName());
