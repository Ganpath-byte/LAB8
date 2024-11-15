let firstname = "Ganpath";
let age = 19;

console.log(firstname);
console.log(age);

let nString = "string";
let nNumber = 42;
let nBoolean = true;
let Undefined;

console.log(nString);
console.log(nNumber);
console.log(nBoolean);
console.log(Undefined);

let RollNumber = 15;

if (RollNumber > 10) {
    console.log("The RollNumber is greater than 10");
}

let isMember = true;

if (isMember) {
    console.log("Member discount applied.");
}

let startValue = 50;

if (startValue > 0) {
    console.log("positive");
} else if (startValue < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

let a = 10;
let b = "10";

console.log("a == b:", a == b);
console.log("a === b:", a === b);
console.log("a != b:", a != b);
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);

let firstName = "Ganpath";
let lastName = "Ramesh";
let age2 = 19;

console.log("Hello, " + firstName + " " + lastName + ", you are " + age + " years old.");

let num = 50;

if (num < 100 && num > 0) {
    console.log("The number is within range.");
}

let hasCar = true;
let hasLicense = true;
let hasInsurance = true;

if (hasCar && hasLicense && hasInsurance) {
    console.log("You can drive legally.");
} else {
    console.log("Check your driving eligibility.");
}

let numm = 21

if (numm % 2 == 0)
    console.log("The number is even")
if (numm % 2 != 0)
    console.log("The number is odd")

let score = 85

if(score >= 90)
    console.log("Grade A")
if(score > 80 && score < 89)
    console.log("Grade B")
else {
    console.log("Grade C")
}