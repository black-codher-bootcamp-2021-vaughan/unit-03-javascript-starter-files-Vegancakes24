// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
let a = 5;
const b = 10;

console.log(a +b);

a = 20;

console.log(a+b);

function sayHey() {
    console.log("hey");
}

function conversation() {
 sayHey();  
 console.log("How are you?");   
 console.log("Goodbye");
}
conversation();
sayHey ();

function futureAge(name, age) {
    sayHey(name); 
    let newAge = age + 5;
    return newAge;
}

console.log (futureAge('Mary', 35 ));
