let firstName = 'James';
console.log(firstName);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//Cannot reassign a constant
//Constant should be default choice if you don't need to reassign
const newRate = 0.3;
console.log(newRate);

let und; //By default set to undefined type
let me = undefined;

//Object
let person = {}
console.log(typeof(person))

person = {
    name: 'James',
    age: 20
}
console.log(person)

//Dot Notation
person.name = 'James L'
console.log(person);

//Bracket Notation
person['name'] = 'Jimmy';
console.log(person['name']);

let selection = 'name';
person[selection] = 'Mary';
console.log(person.name);

//Arrays
let selectedColors = ['red', 'blue'];
selectedColors[selectedColors.length] = 1
console.log(selectedColors);
//console.group(typeof(selectedColors)) //array is an object w/ properties such as length...

//functions
function greet(name){
    console.log('Greetings ' + name + '!')
}

function square(number){
    return number * number;
}

let num = square(2);
greet(num);