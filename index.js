function greet(hello) {
    console.log("Hello" +"!");
}

//prompt function asking user's name
var userName = prompt("What is your name?");
if (userName)  {
    alert('Hello ' + userName);
}

//prompt asking user age
var userAge = prompt("How old are you?");
console.log(parseInt(userAge));

//did user have a birthday already this year
window.confirm('Did you already have a birthday this year?');
if (confirm("Did you already haev a birthday this year?") == true){
    alert(You were born in (currentYear - userAge))
} else {
    alert(You were born in (currentYear - userAge -1))
}

function subtractCurrentYearFromAge (age, yearsToSubtract) {
    const currentYear = new Date().getFullYear();
    const newYear = currentYear - userAge;
    return newYear - age;
}


