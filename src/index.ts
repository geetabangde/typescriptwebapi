// function greet(person: string): string {
//     return `Hello, ${person}!`;
// }

// greet("World");

// let drink : string = "water";
// console.log(`I want to drink ${drink}.`);

let sub : number | string = 10;
console.log(`The value of sub is ${sub}.`);

console.log(sub);

const orders = ['12', '25', "85", "85", "78", "012", "52",]
let currentOrder: string | undefined;
for (const order of orders) {
    if (order === "25") {
        currentOrder = order
        break;
    }
    currentOrder = '11';
}

console.log(currentOrder);


function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // string
  } else {
    console.log(value.toFixed(2)); // number
  }
}
        





    
   