//Solve these problems:
console.log("Script of Functions");
//#1 Create a one line function that adds adds two parameters
const sum = (a, b) => a + b
var ans =sum(10,20);
console.log('Sum is',ans);
//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
console.log("10+3",addToTen(3)); // returns 13

//Currying: What does the last line return?
const sum1 = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
console.log("30+1",curriedSum(30)(1)); // 31


//Currying: What does the last line return?
const sum2 = (a, b) => a + b
const curriedSum2 = (a) => (b) => a + b
const add5 = curriedSum2(5)
console.log("5+12",add5(12)); // 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add6 = (num) => num + 6;
console.log("Compose",compose(add1, add6)(10)); // 17
//f,g will be replaced by add1 and add5 function and g(10+1) will execute returning 11 and then f(11+6) will be executed.. returning value 17

//What are the two elements of a pure function?
//1. Deterministic --> always produces the same results given the same inputs
//2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements