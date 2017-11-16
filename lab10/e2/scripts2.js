//Asking for the users age
var age = prompt("what is your age? ");

//Getting the current year
var date = new Date();
var year = date.getFullYear();

//Subtracting age from current year 
var birthYear = year - age;

document.write(birthYear)
