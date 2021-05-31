abstract class Department{
  // name: string;
  protected employee: string[] = [];
  
  constructor(protected readonly id: string, public name: string){
    // this.name = n;;
  }
  
  abstract discribe(this : Department): void;

  addEmployee(employee:string){
    this.employee.push(employee);
  }

  static addemployee(name:string){
    return {name:name}
  }

  printEmployeeInfo(){
    console.log(this.employee.length);
    console.log(this.employee);  
  }

}

class ItDepartment extends Department {
  constructor(id: string, public admins: string[]){
    super(id, "IT");
  }
  displayAdmin(this: ItDepartment){
    console.log(`THis is list of Admins ${this.admins}`);
  }

  discribe(){
    { console.log(`The Department ${this.name} id is ${this.id}`);}
  }
}
class Accounting extends Department {
  constructor(id: string, private report: string[]){
    super(id,"Accounting")
  }
  displayReports(){
    console.log(`this is the reports \n ${this.report}`);
  }
  addEmployee(employee:string){
    this.employee.push(employee);
  }
  discribe(){
    { console.log(`The Department ${this.name} id is ${this.id}`);}
  }
}

// Department

// const accounts = new Department('Accounting',"d1");

// accounts.discribe();

// const accountsCopy = {discrive : accounts.discribe, name:"Dummy"}

// accountsCopy.discrive();

// accounts.addEmployee('Anmol');
// accounts.addEmployee('Noor');

// accounts.discribe();
// accounts.printEmployeeInfo();



// ItDepartment

const it = new ItDepartment("it1", ["Anmol", "noor", "is", "Admin"]);

it.discribe();
it.addEmployee('Anmol');
it.addEmployee('Noor');

it.printEmployeeInfo();
it.displayAdmin();


// Accounting Department

const accounting = new Accounting("A1",["this is working really really","\nGood Thanks Good."]);

accounting.discribe();
accounting.displayReports();

accounting.addEmployee('this');

accounting.printEmployeeInfo();

console.log(Department.addemployee("Max"));