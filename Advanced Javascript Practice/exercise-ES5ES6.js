// change everything below to the newer Javascript!

console.log("E5-E6");


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const { firstName, lastName, age, eyeColor } = person;
console.log("Person whole object: ",person);
console.log("Destructuring of person object: \n","Person firstname:", firstName, "Person lastname:", lastName, " Age: ",age," Eyecolor: ",eyeColor);

//Dynamically assigning object's properties
const player_name = "Dhoni";
const player = {
    [player_name] : "Hii I play cricket",
    [6+1] : "My Jersey number"
}
console.log("Player object: ",player);

// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = {a, b, c}; //No need to mention property: value format
console.log("Object",okObj);


//Template strings and functions with default arguments
function details(name="Twesha",city="Ahmedabad"){
    return `Hello I am ${name}, and i live in ${city}`;
}
console.log("Calling details Function with default args:\n",details());
const nm = prompt("Enter your name: ");
const city = prompt("Enter your city's name: ");
console.log("Calling details function with given values:\n",details(nm,city));

// Symbol
// Create a symbol: "This is my first Symbol"
const sym = Symbol('This is my first Symbol');
console.log("symbol",sym);

// Arrow functions
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
console.log(whereAmI("Twesha","Ahmedabad"));