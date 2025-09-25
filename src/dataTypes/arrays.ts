let arrayNumber: number[] = [1, 2, 3, 4, 5];
let arrayString: string[] = ["one", "two", "three"];
let arrayBoolean: boolean[] = [true, false, true];

console.log(arrayNumber);
console.log(arrayString);
console.log(arrayBoolean);

let arrayMixed: (number | string | boolean)[] = [1, "two", true, 3, "four", false];
console.log(arrayMixed);

// Iterate arrays
for (let i = 0; i < arrayNumber.length; i++) {
  console.log(`Index ${i}: ${arrayNumber[i]}`);
}

for (let value of arrayString) {
  console.log(`Value: ${value}`);
}

arrayBoolean.forEach((value, index) => {
  console.log(`Index ${index}: ${value}`);
});

// Array methods
arrayNumber.push(6);
console.log("After push:", arrayNumber);

let poppedValue = arrayString.pop();
console.log("Popped value:", poppedValue);
console.log("After pop:", arrayString);

let shiftedValue = arrayBoolean.shift();
console.log("Shifted value:", shiftedValue);
console.log("After shift:", arrayBoolean);
