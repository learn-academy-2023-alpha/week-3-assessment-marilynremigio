// ASSESSMENT 3: Coding Practical Questions with Jest

const { labeledStatement } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


describe("fibonacciSequence", () => {
  it("returns an array the length of the given number, containing the numbers of the Fibonacci sequence", () => {
    expect(fibonacciSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacciSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// ReferenceError: fibonacciSequence is not defined

// b) Create the function that makes the test pass.

//Pseudo code:
  // Create a function named fibonacciSequence 
  // Input: a number > 2 as an argument with number as the parameter
  // Use conditional statement if to make sure the number we're taking in is greater than 2
  // Create a variable named fiboArray assigned to an array [1,1]. We need an array that has a length value of 2, since the function will be taking in a number greater than 2 to return a new length for the array. This will help set us up to formulate the next values in the array
  // Iterate over the array using a for loop starting at index = 1, incrementing by 1, and stopping when the index is the (number - 2) because we have fiboArray starting with the first 2 values
  // Use mutator method .push to add a new value into the array
  // We get the new value by adding the values at the last two indexes together. Since fiboArray.length gives us a value that is 1 greater than the last index, we take the index of fiboArray.length-1 and for the value right before we do [fiboArray.length -2]. After we add the values at these indexes together, we push that value to the end of the array and continue iterating 
  // Output: an array of numbers of the Fibonacci sequence that has the length of the given argument

const fibonacciSequence = (number) => {
  if(number > 2) {
    let fiboArray = [1,1]
    for(let i=1; i <= (number-2); i++) {
      fiboArray.push(fiboArray[fiboArray.length -2] + fiboArray[fiboArray.length -1])
    }
    return fiboArray
  }
}

console.log(fibonacciSequence(fibLength1)) // -> [ 1, 1, 2, 3, 5, 8 ]
console.log(fibonacciSequence(fibLength2)) // -> [ 1,  1,  2,  3,  5, 8, 13, 21, 34, 55 ]

// fibonacciSequence
// ✓ returns an array the length of the given number, containing the numbers of the Fibonacci sequence (3 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total




// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("studyTracker", () => {
  it("returns an array of the values sorted from least to greatest", () => {
    expect(studyTracker(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(studyTracker(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// ReferenceError: studyTracker is not defined

// b) Create the function that makes the test pass.

//Pseudo code:
  // Create a function named studyTracker that takes in an object as the argument with object as the parameter
  // Input: an object with key value pairs of with the day as the key and the number of minutes studied as the value
  // Create a variable named minutes and use Object.values() method to return an array of just the number values of the object (array of the minutes)
  // Output: return array of minutes in order from least to greatest using HOF .sort((a,b) => a-b) 

  const studyTracker = (object) => {
    let minutes = Object.values(object)
    return minutes.sort((a,b) => a-b)
  }
  console.log(studyTracker(studyMinutesWeek1)) // [ 15, 15, 20, 30, 30, 60, 90 ]
  console.log(studyTracker(studyMinutesWeek2)) // [ 10, 15,  20, 45, 60, 65, 100 ]
  
// studyTracker
// ✓ returns an array of the values sorted from least to greatest (1 ms)
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

describe("accumulatedSum", () => {
  it("returns an array of the accumulating sum", () => {
    expect(accumulatedSum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accumulatedSum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accumulatedSum(accountTransactions3)).toEqual([])
  })
})

// ReferenceError: accumulatedSum is not defined

// b) Create the function that makes the test pass.

//Pseudo code:
  // Create a function named accumulatedSum that takes in an array as an argument with the parameter array
  // Input: An array of numbers (positive and negative) OR an empty array
  // Iterate over the array using .reduce() method to accumulate sums of the values in the array starting at the zero index
  // .reduce() takes in 2 required parameters: accumulator and currentValue and we will also take in the optional index parameter i. The accumlator is the outputted value that we update by adding it with the currentValue
  // Set initial value to an empty array [], since .reduce() typically just returns one value and we want to output an array of accumulated values
  // We use spread operator ... to copy the given array so we can use and update the values by adding the currentValue of the iteration to the previous value which we code as 'accumulator[i-1]' 
  // In order to return an empty array if that's what is given, we have to use the logical OR || to either iterate the summation of the values or just 0 
  // Output: An array of the accumulating sums or an empty array

const accumulatedSum = (array) => {
  return array.reduce((accumulator, currentValue, i) => 
  [...accumulator, currentValue + (accumulator[i-1] || 0)], [])
}

console.log(accumulatedSum(accountTransactions1)) //  [ 100, 83, 60, 51 ]
console.log(accumulatedSum(accountTransactions2)) //  [ 250, 161, 261, 165 ]
console.log(accumulatedSum(accountTransactions3)) //  []

//  accumulatedSum
// ✓ returns an array of the accumulating sum (7 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// !!!! which is a miracle because this question was sooooo hard :'(