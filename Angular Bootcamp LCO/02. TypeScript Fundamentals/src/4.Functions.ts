
// We can provide the type definition to the functions and the parameters that we are passing inside the functions
// If we want to make the parameter optional them we can just add the questions
function meet(greeting: string, name: string = 'def name'): string {
  return `${greeting} ${name} !!`
}

console.log(meet('Hi', 'Joey'))