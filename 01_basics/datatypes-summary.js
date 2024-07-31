// Primitve

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 48324892309240n

// Reference (non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraaj", "doga"]
let myObj = {
    name: "rishabh",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);