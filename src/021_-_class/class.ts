export class Company {
  public readonly name: string;
  private readonly employees: Employees[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addEmployees(employees: Employees): void {
    this.employees.push(employees);
  }

  showEmployees(): void {
    for (const employees of this.employees) console.log(employees);
  }
}

export class Employees {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string
  ) {}
}

const company1 = new Company("Minisoft", "40.955.596/0001-06");

const employees1 = new Employees("Sherlott", "Da Silva");
const employees2 = new Employees("Eder", "Telhado");

company1.addEmployees(employees1);
company1.addEmployees(employees2);
company1.addEmployees({
  firstName: "Gabriel",
  lastName: "Miranda",
});

company1.showEmployees();
