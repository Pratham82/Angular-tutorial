interface Person {
  name: string
  checkThisOut(): void
}

interface Emp {
  empCode: number
}

// Classes implement interfaces which will make sure that data that is coming in is of proper type
// If the data provided in a class does not follows the rules of interface then we will get an error at compile time
class EmployeeClass implements Person, Emp {
  name: string
  empName: string
  empCode: number = 0

  constructor(empCode: number, empName: string, name: string) {
    this.empName = empName
    this.empCode = empCode
    this.name = name
  }

  checkThisOut() {
    console.log(`Hello there!!`)
  }
}
