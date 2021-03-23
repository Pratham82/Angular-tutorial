interface Employee {
  empId: number
  empName: string
  empDesignation?: string
  readonly empSalary: number
}

interface Manager extends Employee {
  salaryCycle: number
  currentTeam: string[]
}

// Implementing Interface
class emp1 implements Employee {
  empId = 2121
  empName = 'John Od'
  empSalary = 444444
}

// Instantiating emp1 class
const eObj = new emp1()
eObj.empName = 'New Name'
eObj.empSalary = 23343
console.log(eObj);


// Implementing Manager interface
class manager1 implements Manager {
  empId = 23233
  empName = 'Drake Fixer'
  empSalary = 10022000
  salaryCycle = 15
  currentTeam = ['emp1', 'emp2', 'emp3']
}

const mg1 = new manager1()
console.log(mg1);