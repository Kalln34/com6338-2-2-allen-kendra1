function greet() {}

//prompt function asking user's name
var userName = prompt("What is your name?");
if (userName)  {
    alert('Hello ' + userName);
}

//prompt asking user age
var userAge = prompt("How old are you?");
console.log(parseInt(userAge));

//did user have a birthday already this year
if (window.confirm("Did you already have a birthday this year?")) {
    alert("If you are age years old, you were born in birthYear.");
} else {
    alert("You were born in: () ");
}


//calulating birth year formulas
function getBirthYear(age) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - userAge;
    return birthYear;
}

const age = userAge;
const birthYear = currentYear - userAge;
console.log('If you are ${age} years old, you were born in ${birthYear}.');

var currentDate = new Date();
var newDate = new Date().getFullYear() - {userAge}





