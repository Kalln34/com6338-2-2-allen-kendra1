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
var userAge = parseInt(userAge);

//did user have a birthday already this year
var hadBirthdayThisYear = prompt("Have you already had a birthday this year?");
if (confirm(hadBirthdayThisYear)) {
   console.log("User clicked yes");
} else {
    console.log("User clicked no");
}