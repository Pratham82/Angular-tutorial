// For Loop
// for (let i: number = 0; i <= 5; i++) {
//   console.log(i)
// }


let numArray: number[] = [23, 45, 545, 23, 45]
let usersObj: object = { u1: 'User 1', u2: 'User 2', u3: 'User 3' }

// For  of loop
for (var val of numArray) {
  console.log(`Val is ${val}`)
}

// For in  loop
for (var index in numArray) {
  console.log(index);
}

for (var index in numArray) {
  console.log(numArray[index]);
}

// for (const it of usersObj) {

// }