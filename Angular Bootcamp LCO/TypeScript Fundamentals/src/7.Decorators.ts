// Decorators

function CanFly(constructorFunction: Function) {
  console.log('CAN FLY INVOKED')
  constructorFunction.prototype.fly = true
}

@CanFly
class NewPerson {
  private personName: string

  constructor(personName: string) {
    this.personName = personName
    console.log('#### Constructor called ####')
  }
}
console.log('#### Creating 1st object  ####')

let joe: NewPerson = new NewPerson('Joe')
console.log(joe)
console.log(joe['fly'] ? 'Drake Can Fly' : 'Darke Cannot Fly')

console.log('#### Creating 2nd object  ####')

let drake: NewPerson = new NewPerson('Drake')
console.log(drake)
console.log(drake['fly'] ? 'Drake Can Fly' : 'Darke Cannot Fly')
